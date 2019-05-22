import { shallow } from 'enzyme'
import Slice from '../Slice'
import React from 'react'

let slice

const children = 'Whatever'

describe('<Slice />', () => {
  describe('Renders...', () => {
    beforeEach(() => {
      slice = shallow(<Slice>{children}</Slice>)
    })

    it('without crashing', () => {
      expect(slice.find('.c-slice')).toExist()
    })

    it('matches its snapshot', () => {
      expect(slice).toMatchSnapshot()
    })
  })

  describe('Modifiers', () => {
    describe('white', () => {
      it('adds the correct className', () => {
        slice = shallow(<Slice white>{children}</Slice>)
        expect(slice.find('.c-slice')).toHaveClassName('c-slice--white')
      })
    })
  })
})
