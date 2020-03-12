import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Close from '@material-ui/icons/Close';
import { Theme } from 'template/theme';
import { Chip, Divider, Card, colors } from '@material-ui/core';
import MultiSelect from './MultiSelect';
import { TasksFilterMultiSelectType, TaskChipsFilterType } from 'lib/types';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  chips: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
  selects: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: colors.grey[50],
    padding: theme.spacing(0.5),
  },
}));

type ChipMutationType = {
  name: string;
  prevValue: string[] | undefined;
  newValue: string;
};

type Props = {
  className?: string;
  onFilter: Function;
  selects: TasksFilterMultiSelectType[] | null;
};

const Filter: React.FC<Props> = (props: Props) => {
  const { className = undefined, onFilter, selects } = props;

  const classes = useStyles();
  const [chips, setChips] = useState<TaskChipsFilterType>({});

  useEffect(() => {
    if (onFilter) onFilter(chips);
  }, [chips]);

  const addChipValues = ({ prevValue, newValue }: ChipMutationType) => {
    if (!prevValue) return { technology: [newValue] };
    else if (prevValue && !prevValue.includes(newValue))
      return { technology: [...prevValue, newValue] };
    else return { technology: prevValue };
  };

  const removeChipValues = ({ prevValue, newValue }: ChipMutationType) => {
    if (prevValue) {
      const newValues = prevValue.filter(value => value !== newValue);
      return newValues.length ? { technology: newValues } : { technology: [] };
    } else return { technology: prevValue };
  };

  const accumulateChipValue = (
    details: ChipMutationType,
    remove: boolean
  ): TaskChipsFilterType =>
    remove ? removeChipValues(details) : addChipValues(details);

  const setChipValue = (
    name: string,
    newValue: string,
    remove: boolean = false
  ) => {
    setChips(({ technology: oldValue }: TaskChipsFilterType) =>
      accumulateChipValue({ name, prevValue: oldValue, newValue }, remove)
    );
  };

  const getChips = (): (string | undefined)[] => {
    const chipsValues = Object.values(chips);

    return chipsValues.length ? _.flatten(chipsValues) : [];
  };
  return (
    <Card className={clsx(classes.root, className)}>
      {!!Object.values(chips).length && (
        <>
          <Divider />
          <div className={classes.chips}>
            {Object.entries(chips).map(
              ([key, value]) =>
                value &&
                value.map(chip => (
                  <Chip
                    className={classes.chip}
                    key={chip}
                    label={chip}
                    onDelete={() => setChipValue(key, chip, true)}
                    deleteIcon={<Close />}
                  />
                ))
            )}
          </div>
          <Divider />
        </>
      )}
      <div className={classes.selects}>
        {selects &&
          selects.map(
            select =>
              select.options && (
                <MultiSelect
                  key={select.label}
                  name={select.name || select.label}
                  label={select.label}
                  onChange={setChipValue}
                  options={select.options}
                  value={chips && getChips()}
                />
              )
          )}
      </div>
    </Card>
  );
};

export default Filter;
