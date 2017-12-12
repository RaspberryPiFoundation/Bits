import { configure } from '@storybook/react'

const components = ['Button', 'Card', 'Link']

configure(() => {
  for (let component of components) {
    require(`./components/${component}/stories.js`) // eslint-disable-line global-require
  }
}, module)
