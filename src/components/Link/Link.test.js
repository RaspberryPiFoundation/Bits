import { mount, shallow } from 'enzyme'
import { Link as RouterLink } from 'react-router-dom'
import { MemoryRouter } from 'react-router-dom'
import Link from '../Link'
import React from 'react'

let internalLink

const children = 'Whatever'
const internalTo = '/path/to/wherever'
const externalTo = 'https://www.100yen.co.uk'

describe('<Slice />', () => {
  describe('Renders...', () => {
    beforeEach(() => {
      internalLink = shallow(<Link to={internalTo}>{children}</Link>)
    })

    it('without crashing', () => {
      expect(internalLink.find('.c-link')).toBePresent()
    })

    it('matches its snapshot', () => {
      expect(internalLink).toMatchSnapshot()
    })

    describe('external links', () => {
      it('renders a React Router Link component', () => {
        let externalLink = mount(
          <MemoryRouter>
            <Link to={externalTo}>{children}</Link>
          </MemoryRouter>,
        )
        expect(externalLink.find(RouterLink)).toBePresent()
      })
    })
  })

  describe('Modifiers', () => {
    describe('lightOnDark', () => {
      it('adds the correct className', () => {
        internalLink = shallow(
          <Link lightOnDark to={internalTo}>
            {children}
          </Link>,
        )

        expect(internalLink.find('.c-link')).toHaveClassName(
          'c-link--light-on-dark',
        )
      })
    })

    describe('excludeClassname', () => {
      it("doesn't have any classNames", () => {
        internalLink = shallow(
          <Link excludeClassName lightOnDark to={internalTo}>
            {children}
          </Link>,
        )

        expect(internalLink.find('a')).not.toHaveClassName(
          'c-link',
          'c-link--light-on-dark',
        )
      })
    })
  })
})
