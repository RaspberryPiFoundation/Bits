import { shallow } from 'enzyme'
import Slice from '.'
import React from 'react'

let wrapper

const children = <span>Whatever</span>

describe('<Slice />', () => {
  beforeEach(() => {
    wrapper = shallow(<Slice>{children}</Slice>)
  })

  describe('Renders', () => {
    it('without crashing', () => {
      expect(wrapper.find('.c-slice')).toBePresent()
    })

    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Variants', () => {
    describe('...white', () => {
      beforeEach(() => {
        wrapper = shallow(<Slice white>{children}</Slice>)
      })

      it('links to the right place', () => {
        expect(wrapper.find('.c-slice')).toHaveClassName('.c-slice--white')
      })
    })
  })
})
