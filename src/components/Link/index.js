import { Link as RouterLink } from 'react-router-dom'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Link.scss'

const Link = ({ children, className, href, routeTo, ...props }) => {
  const classNames = classnames('c-link', className)

  if (href) {
    return (
      <a {...props} className={classNames} href={href}>
        {children}
      </a>
    )
  }

  return (
    <RouterLink {...props} className={classNames} to={routeTo}>
      {children}
    </RouterLink>
  )
}

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  routeTo: PropTypes.string,
}

export default Link
