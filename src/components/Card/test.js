import { MemoryRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import Card from '.'
import Link from '../Link'
import React from 'react'

let wrapper

describe('<Card />', () => {
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Card />
      </MemoryRouter>,
    )
  })

  it('renders without crashing', () => {
    expect(wrapper.find('.c-card')).toBePresent()
  })

  fit('renders an image with the correct src', () => {
    expect(wrapper.find('.c-card__image')).toHaveProp(
      'src',
      project.masterContent.en.heroImage,
    )
  })

  it('renders the title', () => {
    expect(wrapper.find('.c-card__heading')).toIncludeText(
      project.masterContent.en.title,
    )
  })

  it('renders the description', () => {
    expect(wrapper.find('.c-card__content')).toIncludeText(
      project.masterContent.en.description,
    )
  })

  it('renders the technologies element', () => {
    expect(wrapper.find('o-type-caption')).toBePresent()
  })

  it('links to the right place', () => {
    expect(wrapper.find(Link)).toHaveProp(
      'to',
      `/en/projects/${project.repositoryName}`,
    )
  })
})
