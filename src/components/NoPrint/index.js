import { Base } from 'react-iotacss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * Ensures contents are excluded from printing
 */
export const NoPrint = ({ children, className, ...props }) => {
  const classNames = classnames(className, 'u-no-print')

  return (
    <Base className={classNames} {...props}>
      {children}
    </Base>
  )
}

NoPrint.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default NoPrint
