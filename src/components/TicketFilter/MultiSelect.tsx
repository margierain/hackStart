import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from 'template/theme';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Menu,
  MenuItem,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  menuItem: {
    padding: 0,
  },
  formControlLabel: {
    padding: theme.spacing(0.5, 2),
    width: '100%',
    margin: 0,
  },
}));

type Props = {
  label: string;
  onChange: Function;
  options: string[];
  value: (string | undefined)[];
  name: string;
};

const MultiSelect: React.FC<Props> = (selectionOption: Props) => {
  const { label, options, value, onChange, name } = selectionOption;
  const classes = useStyles();
  const anchorRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  const handleOptionToggle = (event: any) => {
    if (onChange) {
      onChange(name, event.target.value, !event.target.checked);
    }
  };

  return (
    <>
      <Button onClick={handleMenuOpen} ref={anchorRef}>
        {label}
        <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={anchorRef.current}
        className={classes.menu}
        onClose={handleMenuClose}
        open={openMenu}
        elevation={1}
        // eslint-disable-next-line react/jsx-sort-props
        PaperProps={{ style: { width: 250 } }}
      >
        {options.map((option: any) => (
          <MenuItem className={classes.menuItem} key={option}>
            <FormControlLabel
              className={classes.formControlLabel}
              control={
                <Checkbox
                  checked={value.indexOf(option) > -1}
                  color="primary"
                  onClick={handleOptionToggle}
                  value={option}
                />
              }
              label={option}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MultiSelect;
