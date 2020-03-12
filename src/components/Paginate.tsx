import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { colors } from '@material-ui/core';
import { Theme } from 'template/theme';
import ReactPaginate from 'react-paginate';

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    ...theme.typography.button,
    listStyle: 'none',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  active: {},
  activeLink: {},
  break: {},
  breakLink: {},
  disabled: {},
  next: {
    marginLeft: theme.spacing(1),
  },
  nextLink: {
    padding: '6px 16px',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: 4,
    '&:hover': {
      backgroundColor: colors.blueGrey[50],
    },
  },
  page: {},
  pageLink: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(1),
    outline: 'none',
    cursor: 'pointer',
    width: 40,
    height: 40,
    borderRadius: '50%',
    display: 'block',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: colors.blueGrey[50],
      color: theme.palette.text.primary,
    },
    '&$activeLink': {
      backgroundColor: colors.blueGrey[50],
      color: theme.palette.text.primary,
    },
  },
  previous: {
    marginRight: theme.spacing(1),
  },
  previousLink: {
    padding: '6px 16px',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: 4,
    '&:hover': {
      backgroundColor: colors.blueGrey[50],
    },
  },
}));

const getReactPaginationOpts = (
  classes: ReturnType<typeof useStyles>,
  className?: string
) => ({
  activeClassName: classes.active,
  activeLinkClassName: classes.activeLink,
  breakClassName: classes.break,
  breakLabel: '...',
  breakLinkClassName: classes.breakLink,
  containerClassName: clsx(classes.root, className),
  disabledClassName: classes.disabled,
  marginPagesDisplayed: 2,
  nextClassName: classes.next,
  nextLabel: 'next',
  nextLinkClassName: classes.nextLink,
  pageClassName: classes.page,
  pageLinkClassName: classes.pageLink,
  previousClassName: classes.previous,
  previousLabel: 'previous',
  previousLinkClassName: classes.previousLink,
});

type Props = Omit<
  Exclude<
    React.ComponentProps<typeof ReactPaginate>,
    ReturnType<typeof getReactPaginationOpts>
  >,
  'marginPagesDisplayed'
> & {
  className?: string;
};

const Paginate = (props: Props) => {
  const { className = undefined, ...rest } = props;

  const classes = useStyles();

  return (
    <ReactPaginate {...getReactPaginationOpts(classes, className)} {...rest} />
  );
};

export default Paginate;
