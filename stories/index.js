import { configure } from '@storybook/react'

/* eslint-disable global-require */
const loadStories = () => {
  require('./components/Card/stories.js')
  require('./components/Button/stories.js')
  require('./components/Link/stories.js')
}
/* eslint-enable global-require */

configure(loadStories, module)
