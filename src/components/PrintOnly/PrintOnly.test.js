import { shallow } from 'enzyme'
import PrintOnly from '../PrintOnly'
import React from 'react'

let printOnly

const children = 'Whatever'
const className = 'some-extra-class-name'

describe('<Slice />', () => {
  describe('Renders...', () => {
    beforeEach(() => {
      printOnly = shallow(<PrintOnly>{children}</PrintOnly>)
    })

    it('without crashing', () => {
      expect(printOnly.find('.u-print-only')).toBePresent()
    })

    it('matches its snapshot', () => {
      expect(printOnly).toMatchSnapshot()
    })
  })

  describe('With classNames', () => {
    it('adds the correct className', () => {
      printOnly = shallow(
        <PrintOnly className={className}>{children}</PrintOnly>,
      )
      expect(printOnly.find('.u-print-only')).toHaveClassName(className)
    })
  })
})
