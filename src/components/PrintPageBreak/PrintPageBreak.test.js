import { shallow } from 'enzyme'
import PrintPageBreak from '../PrintPageBreak'
import React from 'react'

let printPageBreak

const className = 'some-extra-class-name'

describe('<PrintPageBreak />', () => {
  describe('Renders...', () => {
    beforeEach(() => {
      printPageBreak = shallow(<PrintPageBreak />)
    })

    it('without crashing', () => {
      expect(printPageBreak.find('.c-print-page-break')).toExist()
    })

    it('matches its snapshot', () => {
      expect(printPageBreak).toMatchSnapshot()
    })
  })

  describe('With classNames', () => {
    it('adds the correct className', () => {
      printPageBreak = shallow(<PrintPageBreak className={className} />)
      expect(printPageBreak.find('.c-print-page-break')).toHaveClassName(
        className
      )
    })
  })
})
