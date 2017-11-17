import React from 'react'
import { storiesOf } from '@storybook/react'

import { StaticRouter } from 'react-router-dom'

import Link from '../../src/components/Link'

storiesOf('Link', module)
  .add('Internal link', () => (
    <StaticRouter>
      <Link to="/here">An internal link</Link>
    </StaticRouter>
  ))
  .add('Light on dark internal link', () => (
    <StaticRouter>
      <Link className="c-link--light-on-dark">Hello Link</Link>
    </StaticRouter>
  ))
  .add('external link', () => (
    <StaticRouter>
      <Link to="https://raspberrypi.org">An external link</Link>
    </StaticRouter>
  ))
  .add('Light on dark external link', () => (
    <StaticRouter>
      <Link className="c-link--light-on-dark" to="https://raspberrypi.org">
        Hello Link
      </Link>
    </StaticRouter>
  ))
