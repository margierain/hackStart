import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'template/theme';
import { Chip, Divider, Input, Card, colors } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MultiSelect from './MultiSelect';
import { TicketFilterMultiSelectType } from 'lib/types';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  keywords: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  searchIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(2),
  },
  chips: {
    padding: theme.spacing(2),
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
    padding: theme.spacing(1),
  },
  inNetwork: {
    marginLeft: 'auto',
  },
}));

type ChipMutationType = {
  name: string;
  prevValue: string | string[];
  newValue: string;
};

type Props = {
  className?: string;
  onFilter: Function;
  selects: TicketFilterMultiSelectType[];
  getInitFilter: Function;
};

type ChipsType = {
  [key: string]: string | string[];
};

const Filter: React.FC<Props> = (props: Props) => {
  const { className = undefined, onFilter, selects, getInitFilter } = props;
  const initialChips = getInitFilter() || {};

  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState<ChipsType>(initialChips);

  const addChipValues = (details: ChipMutationType) => {
    const { name, prevValue, newValue } = details;

    if (!prevValue) return { [name]: newValue };
    else if (
      prevValue &&
      Array.isArray(prevValue) &&
      !prevValue.includes(newValue)
    )
      return { [name]: [...prevValue, newValue] };
    else if (prevValue && !Array.isArray(prevValue) && prevValue !== newValue)
      return { [name]: [prevValue, newValue] };
    else return { [name]: prevValue };
  };

  const removeChipValues = (details: ChipMutationType) => {
    const { name, prevValue, newValue } = details;

    if (prevValue && Array.isArray(prevValue)) {
      const newValues = prevValue.filter(value => value !== newValue);
      return newValues.length ? { [name]: newValues } : {};
    } else if (prevValue && !Array.isArray(prevValue)) return {};
    else return { [name]: prevValue };
  };

  const accumulateChipValue = (details: ChipMutationType, remove: boolean) =>
    remove ? removeChipValues(details) : addChipValues(details);

  const setChipValue = (
    name: string,
    newValue: string,
    remove: boolean = false
  ) => {
    setChips(({ [name]: oldValue, ...prevChips }: ChipsType) => ({
      ...prevChips,
      ...accumulateChipValue({ name, prevValue: oldValue, newValue }, remove),
    }));
  };

  const handleInputChange = (event: React.ChangeEvent) => {
    event.persist();
    setInputValue((event.target as HTMLInputElement).value);
  };

  const handleInputKeyup = (event: React.KeyboardEvent) => {
    event.persist();
    if (event.keyCode === 13 && inputValue) {
      setChipValue('keyword', inputValue);
      setInputValue('');
    }
  };

  const getChips = (): (string | undefined)[] => {
    const chipsValues = Object.values(chips);

    return chipsValues.length ? _.flatten(chipsValues) : [];
  };
  const handleChipDelete = (key: string, value: string) =>
    setChipValue(key, value, true);

  const handleMultiSelectChange = (
    name: string,
    value: string,
    remove: boolean
  ) => setChipValue(name, value, remove);

  useEffect(() => {
    if (onFilter) onFilter(chips);
  }, [chips]);

  // useEffect(() => { setChips(getInitFilter())}, []);
  return (
    <Card className={clsx(classes.root, className)}>
      <div className={classes.keywords}>
        <SearchIcon className={classes.searchIcon} />
        <Input
          disableUnderline
          name="keyword"
          onChange={handleInputChange}
          onKeyUp={handleInputKeyup}
          placeholder="Enter a keyword"
          value={inputValue}
        />
      </div>
      {!!Object.values(chips).length && (
        <>
          <Divider />
          <div className={classes.chips}>
            {Object.entries(chips).map(([key, value]) =>
              (Array.isArray(value) ? value : [value]).map(chip => (
                <Chip
                  className={classes.chip}
                  key={chip}
                  label={chip}
                  onDelete={() => handleChipDelete(key, chip)}
                />
              ))
            )}
          </div>
          <Divider />
        </>
      )}
      <div className={classes.selects}>
        {selects.map(select => (
          <MultiSelect
            key={select.label}
            name={select.name || select.label}
            label={select.label}
            onChange={handleMultiSelectChange}
            options={select.options}
            value={chips && getChips()}
          />
        ))}
      </div>
    </Card>
  );
};

export default Filter;
