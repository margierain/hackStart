import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, object } from '@storybook/addon-knobs';
import Button from 'components/button/Button';

const stories = storiesOf('Button', module);
stories
  .add(
    'red button',
    () => (
      <Button
        label={text('color type', 'primary')}
        style={object('style', {
          backgroundColor: 'red',
          border: '5px dotted limegreen',
        })}
      />
    ),
    {
      notes: 'A very simple red button',
    }
  )
  .add('button blue', () => (
    <Button
      label={text('color-type', 'secondary')}
      onClick={action('blue')}
      style={object('style', {
        backgroundColor: 'blue',
        border: '5px dotted black',
      })}
    />
  ));
