import { Base } from 'react-iotacss'
import { Link as RouterLink } from 'react-router-dom'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Link.scss'

const Link = ({ children, className, excludeClassname, to, ...props }) => {
  const classNames = classnames(
    {
      'c-link': !excludeClassname,
    },
    className,
  )

  const anchorLink = (
    <Base className={classNames} href={to} tagName="a" {...props}>
      {children}
    </Base>
  )

  const isExternal = () => !/^https?:\/\//i.test(to)

  const routerLink = (
    <RouterLink className={classNames} to={to} {...props}>
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
  to: PropTypes.string.isRequired,
}

export default Link
