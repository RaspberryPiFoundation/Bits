import classnames from 'classnames'
import Link from '../Link'
import PropTypes from 'prop-types'
import React from 'react'

import './Button.scss'

const Button = ({ children, className, to, ...props }) => {
  const classNames = classnames('c-button', className)
  const isLink = () => typeof to === 'string'

  if (isLink()) {
    return (
      <Link {...props} className={classNames} excludeClassname={true} to={to}>
        {cardChildren}
      </Link>
    )
  }

  return (
    <button {...props} className={classNames}>
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
}

export default Button
