import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Caption.scss'
import Type from '../'

/**
 * Captions are smaller bits of text like meta information or citations.
 */
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
