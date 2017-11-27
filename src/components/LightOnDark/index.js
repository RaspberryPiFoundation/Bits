import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './LightOnDark.scss'

export const LightOnDark = ({ children, className, ...props }) => {
  const classNames = classnames('c-light-on-dark', className)

  return (
    <div {...props} className={classNames}>
      {children}
    </div>
  )
}

LightOnDark.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default LightOnDark
