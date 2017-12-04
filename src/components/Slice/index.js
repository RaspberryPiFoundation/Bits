import './Slice.scss'
import { Base } from 'react-iotacss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

export const Slice = ({ children, className, ...props }) => {
  const classNames = classnames('c-slice', className)

  return (
    <Base {...props} className={classNames}>
      {children}
    </Base>
  )
}

Slice.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Slice
