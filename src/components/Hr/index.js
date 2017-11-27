import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Hr.scss'

export const Hr = ({ className, ...props }) => {
  const classNames = classnames('c-hr', className)
  return <hr {...props} className={classNames} />
}

Hr.propTypes = {
  className: PropTypes.string,
}

export default Hr
