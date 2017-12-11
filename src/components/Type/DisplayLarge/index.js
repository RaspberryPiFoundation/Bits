import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './DisplayLarge.scss'
import Type from '../'

export const TypeDisplayLarge = ({
  children,
  className,
  element,
  ...props
}) => {
  const classNames = classnames('c-type-display-large', className)

  return (
    <Type className={classNames} element={element} {...props}>
      {children}
    </Type>
  )
}

TypeDisplayLarge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
}

export default TypeDisplayLarge
