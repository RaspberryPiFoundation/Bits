import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Base.scss'
import Type from '../'

export const TypeBase = ({ children, className, element, ...props }) => {
  const classNames = classnames('c-type-base', className)

  return (
    <Type className={classNames} element={element} {...props}>
      {children}
    </Type>
  )
}

TypeBase.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
}

export default TypeBase
