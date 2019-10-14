import { Base } from 'react-iotacss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './LightOnDark.scss'

/**
 * Changes text colour in children to a light grey for use on dark backgrounds
 */
export const LightOnDark = ({ children, className, ...props }) => {
  const classNames = classnames('c-light-on-dark', className)

  return (
    <Base {...props} className={classNames}>
      {children}
    </Base>
  )
}

LightOnDark.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default LightOnDark
