import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Wysiwyg.scss'

export const Wysiwyg = ({ children, className, ...props }) => {
  const classNames = classnames('c-wysiwyg', className)

  return (
    <div {...props} className={classNames}>
      {children}
    </div>
  )
}

Wysiwyg.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Wysiwyg
