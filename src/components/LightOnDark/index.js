import { Base } from 'react-iotacss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './LightOnDark.scss'

export const LightOnDark = ({ children, className, ...props }) => {
  const classNames = classnames('c-light-on-dark', className)

  return (
    <Base className={classNames} {...props}>
      {children}
    </Base>
  )
}

LightOnDark.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default LightOnDark
