import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '../../../src/components/Button'
import LightOnDark from '../../../src/components/LightOnDark'
import Slice from '../../../src/components/Slice'

storiesOf('Button', module)
  .add('Primary', () => (
    <Slice>
      <Button>Hello Button</Button>
    </Slice>
  ))
  .add('Secondary', () => (
    <Slice>
      <Button className="c-button--secondary">Hello Button</Button>
    </Slice>
  ))
  .add('Primary on dark background', () => (
    <Slice uBgcolor="ui-black">
      <LightOnDark>
        <Button className="c-button--light-on-dark">Hello Button</Button>
      </LightOnDark>
    </Slice>
  ))
  .add('Secondary on dark background', () => (
    <Slice uBgcolor="ui-black">
      <LightOnDark>
        <Button className="c-button--light-on-dark c-button--secondary">
          Hello Button
        </Button>
      </LightOnDark>
    </Slice>
  ))
