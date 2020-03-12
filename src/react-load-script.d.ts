import React from 'react';

declare module 'react-load-script' {
  // imports here...

  export interface ScriptProps {
    url: string;
    onLoad: () => void;
    // etc...
  }

  export default class Script extends React.Component<ScriptProps> {}
}
