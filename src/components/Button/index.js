import { Base } from 'react-iotacss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Button.scss'
import Link from '../Link'

/**
 * A styled button that can also be used as a link
 */
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
  /** Any additional classes you wish to add to the button */
  className: PropTypes.string,
  /** The contents of the button */
  children: PropTypes.node.isRequired,
  /** Changes the hover styles to better suit dark backgrounds */
  lightOnDark: PropTypes.bool,
  /** Applies secondary button styling */
  secondary: PropTypes.bool,
  /** Causes the button to be treated as a link to the URL specified */
  to: PropTypes.string,
}

export default Button
