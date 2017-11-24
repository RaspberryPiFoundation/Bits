import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import Type from '../'

import './Caption.scss'

export const TypeCaption = ({ children, className, element, ...props }) => {
  const classNames = classnames('c-type-caption', className)

  return (
    <Type className={classNames} element={element} {...props}>
      {children}
    </Type>
  )
}

TypeCaption.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
}

export default TypeCaption
