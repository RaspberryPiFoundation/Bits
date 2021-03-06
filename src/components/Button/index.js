import './Button.scss'

import { Base } from 'react-iotacss'
import Link from '../Link'
import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'

/**
 * A styled button that can also be used as a link
 */
const Button = ({
  children,
  className,
  disabled,
  lightOnDark,
  secondary,
  to,
  ...props
}) => {
  const classNames = classnames('c-button', className, {
    'c-button--light-on-dark': lightOnDark,
    'c-button--secondary': secondary,
    'c-button--disabled': disabled,
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
    <Base
      {...props}
      className={classNames}
      disabled={disabled}
      tagName="button"
    >
      {children}
    </Base>
  )
}

Button.propTypes = {
  /** Any additional classes you wish to add to the button */
  className: PropTypes.string,
  /** The contents of the button */
  children: PropTypes.node.isRequired,
  /** Determines if button should render in a disabled state */
  disabled: PropTypes.bool,
  /** Changes the hover styles to better suit dark backgrounds */
  lightOnDark: PropTypes.bool,
  /** Applies secondary button styling */
  secondary: PropTypes.bool,
  /** Causes the button to be treated as a link to the URL specified */
  to: PropTypes.string,
}

export default Button
