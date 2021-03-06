import { mount, shallow } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import Card from '.'
import Link from '../Link'
import React from 'react'

let wrapper

const children = <span>Whatever</span>
const heading = 'Card Heading'
const imageSrc = 'https://'
const to = 'https://raspberrypi.org'

describe('<Card />', () => {
  describe('Props', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Card heading={heading} imageSrc={imageSrc}>
          {children}
        </Card>,
      )
    })

    it('renders without crashing', () => {
      expect(wrapper.find('.c-card')).toExist()
    })

    it('renders an image with the correct src', () => {
      expect(wrapper.find('.c-card__image')).toHaveProp('src', imageSrc)
    })

    it('renders the title', () => {
      expect(wrapper.find('.c-card__heading')).toIncludeText(heading)
    })

    it('renders the content', () => {
      expect(wrapper.find('.c-card__content')).toHaveHTML(
        [
          '<div class="c-card__content">',
          '<span class="c-card__heading">',
          'Card Heading',
          '</span>',
          '<span>',
          'Whatever',
          '</span>',
          '</div>',
        ].join(''),
      )
    })

    it('renders the technologies element', () => {
      expect(wrapper.find('span')).toExist()
    })
  })

  describe('Card as Link', () => {
    beforeEach(() => {
      wrapper = mount(
        <MemoryRouter>
          <Card heading={heading} imageSrc={imageSrc} to={to}>
            {children}
          </Card>
        </MemoryRouter>,
      )
    })

    it('links to the right place', () => {
      expect(wrapper.find(Link)).toHaveProp('to', to)
    })
  })
})
