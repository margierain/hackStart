import { Map } from 'immutable';
import { EditorState, DefaultDraftBlockRenderMap, Modifier } from 'draft-js';

export function setBlockData(editorState: EditorState, data: Map<any, any>) {
  const newContentState = Modifier.setBlockData(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    data
  );

  return EditorState.push(editorState, newContentState, 'change-block-data');
}

const newBlockRenderMap = Map({
  unstyled: {
    element: 'p',
  },
  paragraph: {
    element: 'p',
  },
});

export const blockRenderMap = DefaultDraftBlockRenderMap.merge(
  newBlockRenderMap
);
