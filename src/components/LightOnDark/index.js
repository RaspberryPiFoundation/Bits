import './LightOnDark.scss'
import { Base } from 'react-iotacss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

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
