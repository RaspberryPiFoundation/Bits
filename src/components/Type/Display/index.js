import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Display.scss'
import Type from '../'

export const TypeDisplay = ({ children, className, element, ...props }) => {
  const classNames = classnames('c-type-display', className)

  return (
    <Type className={classNames} element={element} {...props}>
      {children}
    </Type>
  )
}

TypeDisplay.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
}

export default TypeDisplay
