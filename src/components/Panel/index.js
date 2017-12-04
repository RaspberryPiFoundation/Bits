import './Panel.scss'
import { Base } from 'react-iotacss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

export const Panel = ({ children, className, ...props }) => {
  const classNames = classnames('c-panel', className)

  return (
    <Base {...props} className={classNames}>
      {children}
    </Base>
  )
}

Panel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Panel
