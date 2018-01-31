import { mount, shallow } from 'enzyme'
import Button from '../Button'
import { MemoryRouter } from 'react-router-dom'
import Link from '../Link'
import React from 'react'

const children = 'Whatever'

let button

describe('<Button />', () => {
  describe('Renders...', () => {
    beforeEach(() => {
      button = shallow(<Button>{children}</Button>)
    })

    it('without crashing', () => {
      expect(button.find('.c-button')).toBePresent()
    })

    it('matches its snapshot', () => {
      expect(button).toMatchSnapshot()
    })

    describe('external links', () => {
      it('renders a Link component', () => {
        let externalButton = mount(
          <MemoryRouter>
            <Button to="https://www.100yen.co.uk">{children}</Button>
          </MemoryRouter>,
        )
        expect(externalButton.find(Link)).toBePresent()
      })
    })
  })

  describe('Modifiers', () => {
    describe('block', () => {
      it('adds the correct className', () => {
        button = shallow(<Button block>{children}</Button>)

        expect(button.find('.c-button')).toHaveClassName('c-button--block')
      })
    })

    describe('lightOnDark', () => {
      it('adds the correct className', () => {
        button = shallow(<Button lightOnDark>{children}</Button>)

        expect(button.find('.c-button')).toHaveClassName(
          'c-button--light-on-dark',
        )
      })
    })

    describe('secondary', () => {
      it('adds the correct className', () => {
        button = shallow(<Button secondary>{children}</Button>)

        expect(button.find('.c-button')).toHaveClassName('c-button--secondary')
      })
    })
  })
})
