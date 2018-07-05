import { Base } from 'react-iotacss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Badge.scss'

export const Badge = ({ children, variant = 'primary', ...props }) => {
  const classNames = classnames('c-badge', `c-badge--${variant}`)

  return (
    <Base {...props} className={classNames}>
      {children}
    </Base>
  )
}

Badge.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Badge
