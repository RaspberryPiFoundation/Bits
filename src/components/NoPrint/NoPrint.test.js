import { shallow } from 'enzyme'
import NoPrint from '../NoPrint'
import React from 'react'

let noPrint

const children = 'Whatever'
const className = 'some-extra-class-name'

describe('<Slice />', () => {
  describe('Renders...', () => {
    beforeEach(() => {
      noPrint = shallow(<NoPrint>{children}</NoPrint>)
    })

    it('without crashing', () => {
      expect(noPrint.find('.u-no-print')).toExist()
    })

    it('matches its snapshot', () => {
      expect(noPrint).toMatchSnapshot()
    })
  })

  describe('With classNames', () => {
    it('adds the correct className', () => {
      noPrint = shallow(<NoPrint className={className}>{children}</NoPrint>)
      expect(noPrint.find('.u-no-print')).toHaveClassName(className)
    })
  })
})
