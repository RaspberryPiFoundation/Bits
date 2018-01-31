import { mount, shallow } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import Card, { imageJSX } from '.'
import Link from '../Link'
import React from 'react'

let mountedComp
let shallowComp

const children = <span>Whatever</span>
const heading = 'Card Heading'
const imageSrc = 'http://via.placeholder.com/350x150'
const to = 'https://raspberrypi.org'

describe('<Card />', () => {
  beforeEach(() => {
    shallowComp = shallow(
      <Card heading={heading} imageSrc={imageSrc}>
        {children}
      </Card>,
    )
  })

  describe('Renders', () => {
    beforeEach(() => {
      mountedComp = mount(
        <Card heading={heading} imageSrc={imageSrc}>
          {children}
        </Card>,
      )
    })

    it('without crashing', () => {
      expect(mountedComp.find('.c-card')).toBePresent()
    })

    it('matches its snapshot', () => {
      expect(mountedComp).toMatchSnapshot()
    })
  })

  describe('Props', () => {
    it('renders an image with the correct src', () => {
      expect(shallowComp.find('.c-card__image')).toHaveProp('src', imageSrc)
    })

    it('does not renders the image if prop not supplied', () => {
      shallowComp = shallow(<Card heading={heading}>{children}</Card>)
      expect(shallowComp.find('.c-card__image')).not.toBePresent()
    })

    it('renders the title', () => {
      expect(shallowComp.find('.c-card__heading')).toIncludeText(heading)
    })

    it('does not renders the title if prop not supplied', () => {
      shallowComp = shallow(<Card imageSrc={imageSrc}>{children}</Card>)
      expect(shallowComp.find('.c-card__heading')).not.toBePresent()
    })

    it('renders the content', () => {
      expect(shallowComp.find('.c-card__content')).toHaveHTML(
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
      expect(shallowComp.find('span')).toBePresent()
    })
  })

  describe('Variants', () => {
    describe('...as Link', () => {
      beforeEach(() => {
        mountedComp = mount(
          <MemoryRouter>
            <Card heading={heading} imageSrc={imageSrc} to={to}>
              {children}
            </Card>
          </MemoryRouter>,
        )
      })

      it('links to the right place', () => {
        expect(mountedComp.find(Link)).toHaveProp('to', to)
      })
    })
  })
})
