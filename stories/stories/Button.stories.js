import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '../../src/components/Button'

storiesOf('Button', module)
  .add('Primary', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('Secondary', () => (
    <Button onClick={action('clicked')} className="c-button--secondary">
      Hello Button
    </Button>
  ))
