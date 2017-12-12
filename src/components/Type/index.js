import { Base } from 'react-iotacss'
import PropTypes from 'prop-types'
import React from 'react'

export const Type = ({ children, className, element, ...props }) => {
  const elementName = typeof element === 'undefined' ? 'span' : element

  return (
    <Base className={className} tagName={elementName} {...props}>
      {children}
    </Base>
  )
}

Type.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
}

export default Type
