import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './SubHeading.scss'
import Type from '../'

export const TypeSubHeading = ({ children, className, element, ...props }) => {
  const classNames = classnames('c-type-sub-heading', className)

  return (
    <Type className={classNames} element={element} {...props}>
      {children}
    </Type>
  )
}

TypeSubHeading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
}

export default TypeSubHeading
