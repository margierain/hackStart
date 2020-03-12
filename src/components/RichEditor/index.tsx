import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import {
  Editor,
  EditorState,
  RichUtils,
  Modifier,
  getDefaultKeyBinding,
  DraftEditorCommand,
  ContentBlock,
  DraftHandleValue,
} from 'draft-js';

import { stateToHTML } from 'draft-js-export-html';
import { makeStyles } from '@material-ui/styles';
import { Paper, Divider } from '@material-ui/core';

import EditorToolbar from './components/EditorToolbar';
import { blockRenderMap } from './utils';

import { stateFromHTML } from 'draft-js-import-html';
import { Theme } from 'template/theme';

const useStyles = makeStyles<Theme>(theme => ({
  root: {},
  editorContainer: {
    padding: theme.spacing(2),
    minHeight: 400,
    '& .public-DraftEditorPlaceholder-root': {
      ...theme.typography.body2,
    },
    '& .public-DraftEditorPlaceholder-hasFocus': {
      display: 'none',
    },
    '& .public-DraftEditor-content': {
      '& p': {
        ...theme.typography.body1,
      },
      '& h1': {
        ...theme.typography.h1,
      },
      '& h2': {
        ...theme.typography.h2,
      },
      '& h3': {
        ...theme.typography.h3,
      },
      '& h4': {
        ...theme.typography.h4,
      },
      '& h5': {
        ...theme.typography.h5,
      },
      '& h6': {
        ...theme.typography.h6,
      },
      '& blockquote': {
        ...theme.typography.subtitle1,
      },
      '& ul': {
        ...theme.typography.body1,
        marginLeft: theme.spacing(4),
      },
      '& ol': {
        ...theme.typography.body1,
        marginLeft: theme.spacing(4),
      },
      '& pre': {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
      },
    },
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  textAlignJustify: {
    textAlign: 'justify',
  },
  editorHeader: {
    position: 'relative',
  },
  backDrop: {
    background: '#cacaca',
    width: '100%',
    zIndex: 2,
    opacity: 0.2,
    height: '100%',
    position: 'absolute',
  },
}));

const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const RichEditor: React.FC<{
  className?: string;
  placeholder: string;
  readOnly: boolean;
  initialValue?: string | null;
  onChange?: (html: string) => void;
}> = props => {
  const { placeholder, className = undefined, initialValue } = props;

  const classes = useStyles();

  const editorRef = useRef<any>(null);
  const [editorState, setEditorState] = useState(
    initialValue
      ? EditorState.createWithContent(stateFromHTML(initialValue))
      : EditorState.createEmpty()
  );

  const handleContainerClick = () => {
    if (!editorRef) return;
    editorRef.current.focus();
  };

  const handleToolbarToggle = (type: string, value: string) => {
    if (type === 'blockType') {
      if (['left', 'center', 'right', 'justify'].includes(value)) {
        const newContentState = Modifier.setBlockData(
          editorState.getCurrentContent(),
          editorState.getSelection(),
          //@ts-ignore
          { 'text-align': value }
        );

        const newEditorState = EditorState.push(
          editorState,
          newContentState,
          'change-block-data'
        );

        setEditorState(newEditorState);
        return;
      }

      setEditorState(RichUtils.toggleBlockType(editorState, value));
    } else {
      setEditorState(RichUtils.toggleInlineStyle(editorState, value));
    }
  };

  const handleEditorChange = (editorState: EditorState) => {
    setEditorState(editorState);
    // let html = stateToHTML(editorState.getCurrentContent());
    // console.log(html);
    if (props.onChange && editorState.getCurrentContent().hasText())
      props.onChange(stateToHTML(editorState.getCurrentContent()));

    if (props.onChange && !editorState.getCurrentContent().hasText())
      props.onChange('');
  };

  const handleKeyCommand = (
    command: DraftEditorCommand,
    editorState: EditorState
  ): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      handleEditorChange(newState);
      return 'handled';
    }

    return 'not-handled';
  };

  const mapKeyToEditorCommand = (event: any) => {
    if (event.keyCode === 9) {
      const newEditorState = RichUtils.onTab(event, editorState, 4);

      if (newEditorState !== editorState) {
        handleEditorChange(newEditorState);
      }

      return null;
    }

    return getDefaultKeyBinding(event);
  };

  function blockStyleFn(contentBlock: ContentBlock) {
    const textAlign = contentBlock.getData().get('text-align');

    if (textAlign) {
      const className = `textAlign${capitalize(textAlign)}`;

      return classes[className];
    }

    return '';
  }

  return (
    <Paper className={clsx(classes.root, className)}>
      <div className={classes.editorHeader}>
        {props.readOnly && <div className={classes.backDrop}></div>}
        <EditorToolbar
          editorState={editorState}
          onToggle={handleToolbarToggle}
        />
      </div>
      <Divider />
      <div className={classes.editorContainer} onClick={handleContainerClick}>
        <Editor
          readOnly={props.readOnly}
          blockRenderMap={blockRenderMap}
          blockStyleFn={blockStyleFn}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={mapKeyToEditorCommand}
          onChange={handleEditorChange}
          placeholder={placeholder}
          ref={editorRef}
          spellCheck
        />
      </div>
    </Paper>
  );
};
export default RichEditor;
