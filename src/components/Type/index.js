import PropTypes from 'prop-types'
import React from 'react'

export const Type = ({ children, className, element, ...props }) => {
  const elementName = typeof element === 'undefined' ? 'span' : element

  return React.createElement(
    elementName,
    {
      className: className,
      ...props,
    },
    children,
  )
}

Type.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
}

export default Type
