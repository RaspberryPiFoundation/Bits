import { Base } from 'react-iotacss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Button.scss'
import Link from '../Link'

const Button = ({
  children,
  className,
  lightOnDark,
  secondary,
  to,
  ...props
}) => {
  const classNames = classnames('c-button', className, {
    'c-button--light-on-dark': lightOnDark,
    'c-button--secondary': secondary,
  })
  const isLink = () => typeof to === 'string'

  if (isLink()) {
    return (
      <Link className={classNames} excludeClassname={true} to={to} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <Base className={classNames} tagName="button" {...props}>
      {children}
    </Base>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  lightOnDark: PropTypes.bool,
  secondary: PropTypes.bool,
  to: PropTypes.string,
}

export default Button
