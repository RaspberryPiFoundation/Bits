import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import Type from '../'

import './Heading.scss'

export const TypeHeading = ({ children, className, element, ...props }) => {
  const classNames = classnames('c-type-heading', className)

  return (
    <Type className={classNames} element={element} {...props}>
      {children}
    </Type>
  )
}

TypeHeading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
}

export default TypeHeading
