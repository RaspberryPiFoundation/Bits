import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Base.scss'
import Type from '../'

/**
 * The default type size. If you want something to have the appearance of a `<p>` outside a Wysiwyg component, this is what you need.
 */
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
