import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import './Link.scss'

const Link = ({ children, className, to, ...props }) => {
  const classes = classnames('c-link', className)

  return (
    <RouterLink className={classes} to={to} {...props}>
      {children}
    </RouterLink>
  )
}

Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
}

export default Link
