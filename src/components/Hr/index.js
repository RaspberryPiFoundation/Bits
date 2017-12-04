import './Hr.scss'
import { Base } from 'react-iotacss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

export const Hr = ({ className, ...props }) => {
  const classNames = classnames('c-hr', className)
  return <Base {...props} className={classNames} tagName="hr" />
}

Hr.propTypes = {
  className: PropTypes.string,
}

export default Hr
