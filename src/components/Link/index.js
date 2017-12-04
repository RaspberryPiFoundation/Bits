import './Link.scss'
import { Base } from 'react-iotacss'
import { Link as RouterLink } from 'react-router-dom'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const Link = ({ children, className, excludeClassname, to, ...props }) => {
  const classNames = classnames(
    {
      'c-link': !excludeClassname,
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
  to: PropTypes.string.isRequired,
}

export default Link
