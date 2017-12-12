import { Base } from 'react-iotacss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Slice.scss'

export const Slice = ({ children, className, white, ...props }) => {
  const classNames = classnames(
    'c-slice',
    {
      'c-slice--white': white,
    },
    className,
  )

  return (
    <Base className={classNames} {...props}>
      {children}
    </Base>
  )
}

Slice.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  white: PropTypes.bool,
}

export default Slice
