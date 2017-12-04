import './Wysiwyg.scss'
import { Base } from 'react-iotacss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

export const Wysiwyg = ({ children, className, ...props }) => {
  const classNames = classnames('c-wysiwyg', className)

  return (
    <Base {...props} className={classNames}>
      {children}
    </Base>
  )
}

Wysiwyg.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Wysiwyg
