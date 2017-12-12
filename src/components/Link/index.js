import { Base } from 'react-iotacss'
import { Link as RouterLink } from 'react-router-dom'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Link.scss'

const Link = ({
  children,
  className,
  excludeClassname,
  lightOnDark,
  to,
  ...props
}) => {
  const classNames = classnames(
    {
      'c-link': !excludeClassname,
      'c-link--light-on-dark': !excludeClassname && lightOnDark,
    },
    className,
  )

  const anchorLink = (
    <Base {...props} className={classNames} href={to} tagName="a">
      {children}
    </Base>
  )

  const isExternal = () => !/^https?:\/\//i.test(to)

  const routerLink = (
    <RouterLink {...props} className={classNames} to={to}>
      {children}
    </RouterLink>
  )

  if (isExternal()) {
    return anchorLink
  }

  return routerLink
}

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  excludeClassname: PropTypes.bool,
  lightOnDark: PropTypes.bool,
  to: PropTypes.string.isRequired,
}

export default Link
