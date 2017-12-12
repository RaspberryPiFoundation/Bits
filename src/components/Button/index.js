import { Base } from 'react-iotacss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Button.scss'
import Link from '../Link'

/**
 * Buttons can be represented with the `<a>` or `<button>` elements. There are primary
 * and secondary styles, and a block modifier.
 */
const Button = ({
  block,
  children,
  className,
  lightOnDark,
  secondary,
  to,
  ...props
}) => {
  const classNames = classnames('c-button', className, {
    'c-button--block': block,
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
  /** adds `c-button--block` to className */
  block: PropTypes.bool,
  /** @ignore */
  className: PropTypes.string,
  /** @ignore */
  children: PropTypes.node.isRequired,
  /** adds `c-button--light-on-dark` to className */
  lightOnDark: PropTypes.bool,
  /** adds `c-button--secondary` to className */
  secondary: PropTypes.bool,
  /** relative or qualified URL - determines if component renders `<a>` or `<button>` */
  to: PropTypes.string,
}

export default Button
