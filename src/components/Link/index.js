import { Link as RouterLink } from 'react-router-dom'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Link.scss'

const Link = ({ children, className, to, ...props }) => {
  const classNames = classnames('c-link', className)

  const anchorLink = (
    <a {...props} className={classNames} href={to}>
      {children}
    </a>
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
  to: PropTypes.string.isRequired,
}

export default Link
