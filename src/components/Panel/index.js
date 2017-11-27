import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Panel.scss'

export const Panel = ({ children, className, ...props }) => {
  const classNames = classnames('c-panel', className)

  return (
    <div {...props} className={classNames}>
      {children}
    </div>
  )
}

Panel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Panel
