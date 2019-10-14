import { Base } from 'react-iotacss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * Ensures contents are hidden from display, but included in print
 */
export const PrintOnly = ({ children, className, ...props }) => {
  const classNames = classnames(className, 'u-print-only')

  return (
    <Base className={classNames} {...props}>
      {children}
    </Base>
  )
}

PrintOnly.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default PrintOnly
