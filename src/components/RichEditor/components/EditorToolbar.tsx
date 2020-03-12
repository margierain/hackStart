/* eslint-disable react/no-multi-comp */
import React, { Fragment } from 'react';
import clsx from 'clsx';

import { Theme } from 'template/theme';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import { Tooltip, Button } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import CodeIcon from '@material-ui/icons/Code';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatUnderlined from '@material-ui/icons/FormatUnderlined';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import { EditorState } from 'draft-js';

const useStyles1 = makeStyles<Theme>(theme => ({
  root: {},
  inner: {
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
  },
}));

const useStyles2 = makeStyles<Theme>(theme => ({
  button: {
    padding: 0,
    width: 32,
    height: 32,
    minWidth: 32,
    color: theme.palette.icon,
    '& + &': {
      marginLeft: theme.spacing(1),
    },
  },
  activeButton: {
    backgroundColor: fade(theme.palette.primary.main, 0.1),
    color: theme.palette.primary.main,
  },
}));

const BLOCK_TYPES = [
  {
    blockType: 'header-one',
    tooltip: 'Heading 1',
    text: 'H1',
  },
  {
    blockType: 'header-two',
    tooltip: 'Heading 2',
    text: 'H2',
  },
  {
    blockType: 'header-three',
    tooltip: 'Heading 3',
    text: 'H3',
  },
  {
    blockType: 'header-four',
    tooltip: 'Heading 4',
    text: 'H4',
  },
  {
    blockType: 'header-five',
    tooltip: 'Heading 5',
    text: 'H5',
  },
  {
    blockType: 'header-six',
    tooltip: 'Heading 6',
    text: 'H6',
  },
  {
    blockType: 'blockquote',
    tooltip: 'Blockquote',
    icon: FormatQuoteIcon,
  },
  {
    blockType: 'unordered-list-item',
    tooltip: 'Unordered list',
    icon: FormatListBulletedIcon,
  },
  {
    blockType: 'ordered-list-item',
    tooltip: 'Ordered list',
    icon: FormatListNumberedIcon,
  },
  {
    blockType: 'code-block',
    tooltip: 'Code Block',
    icon: CodeIcon,
  },
  {
    blockType: 'left',
    tooltip: 'Align left',
    icon: FormatAlignLeftIcon,
  },
  {
    blockType: 'center',
    tooltip: 'Align center',
    icon: FormatAlignCenterIcon,
  },
  {
    blockType: 'right',
    tooltip: 'Align right',
    icon: FormatAlignRightIcon,
  },
  {
    blockType: 'justify',
    tooltip: 'Justify',
    icon: FormatAlignJustifyIcon,
  },
];

const INLINE_STYLES = [
  {
    inlineStyle: 'BOLD',
    tooltip: 'Bold',
    icon: FormatBoldIcon,
  },
  {
    inlineStyle: 'ITALIC',
    tooltip: 'Italic',
    icon: FormatItalicIcon,
  },
  {
    inlineStyle: 'UNDERLINE',
    tooltip: 'Underline',
    icon: FormatUnderlined,
  },
  {
    inlineStyle: 'CODE',
    tooltip: 'Monospace',
    icon: CodeIcon,
  },
];

const ButtonBase: React.FC<{
  active: boolean;
  onClick: (event: React.MouseEvent) => void;
  tooltip: string;
}> = props => {
  const { active, tooltip, children, ...rest } = props;

  const classes = useStyles2();

  return (
    <Tooltip title={tooltip}>
      <Button
        {...rest}
        className={clsx(classes.button, {
          [classes.activeButton]: active,
        })}
      >
        {children}
      </Button>
    </Tooltip>
  );
};

const BlockTypeButtons: React.FC<{
  editorState: EditorState;
  onToggle: (text: string, style: any) => void;
}> = props => {
  const { editorState, onToggle } = props;

  const handleClick = (event: any, blockType: any) => {
    event.preventDefault();

    onToggle('blockType', blockType);
  };

  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  const blockData = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getData();

  return (
    <Fragment>
      {BLOCK_TYPES.map(button => {
        let active = false;

        if (['left', 'center', 'right', 'justify'].includes(button.blockType)) {
          active = blockData.get('text-align') === button.blockType;
        } else {
          active = button.blockType === blockType;
        }

        return (
          <ButtonBase
            active={active}
            key={button.blockType}
            onClick={(event: any) => handleClick(event, button.blockType)}
            tooltip={button.tooltip}
          >
            {button.icon ? <button.icon /> : button.text}
          </ButtonBase>
        );
      })}
    </Fragment>
  );
};

const InlineStyleButtons: React.FC<{
  editorState: EditorState;
  onToggle: (text: string, style: string) => void;
}> = props => {
  const { editorState, onToggle } = props;

  const handleClick = (event: React.MouseEvent, inlineStyle: string) => {
    event.preventDefault();
    onToggle('inlineStyle', inlineStyle);
  };

  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <Fragment>
      {INLINE_STYLES.map(button => (
        <ButtonBase
          active={currentStyle.has(button.inlineStyle)}
          key={button.inlineStyle}
          onClick={event => handleClick(event, button.inlineStyle)}
          tooltip={button.tooltip}
        >
          {button.icon ? <button.icon /> : button.tooltip}
        </ButtonBase>
      ))}
    </Fragment>
  );
};

const EditorToolbar: React.FC<{
  className?: string;
  editorState: EditorState;
  onToggle: (text: string, style: any) => void;
}> = props => {
  const { editorState, onToggle, className = undefined, ...rest } = props;

  const classes = useStyles1();

  return (
    <div>
      <div {...rest} className={clsx(classes.root, className)}>
        <PerfectScrollbar>
          <BlockTypeButtons editorState={editorState} onToggle={onToggle} />
          <InlineStyleButtons editorState={editorState} onToggle={onToggle} />
        </PerfectScrollbar>
      </div>
    </div>
  );
};

export default EditorToolbar;
