import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Button.scss'

const Button = ({ children, className, ...props }) => {
  const classNames = classnames('c-button', className)

  return (
    <button {...props} className={classNames}>
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Button
