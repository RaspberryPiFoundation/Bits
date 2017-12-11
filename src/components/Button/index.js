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
      <Link {...props} className={classNames} excludeClassname={true} to={to}>
        {children}
      </Link>
    )
  }

  return (
    <Base {...props} className={classNames} tagName="button">
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
