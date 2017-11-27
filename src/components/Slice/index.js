import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Slice.scss'

export const Slice = ({ children, className, ...props }) => {
  const classNames = classnames('c-slice', className)

  return (
    <div {...props} className={classNames}>
      {children}
    </div>
  )
}

Slice.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Slice
