import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withReadme, withDocs } from 'storybook-readme';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';

import { Text } from '../src/demo/test'
import testmd from '../docs/test.md';
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Text', module).addDecorator(withKnobs)
  .add('sotrybook测试', withReadme(testmd, () => <div><Text />{text('aaaa','fffff')}</div>));
