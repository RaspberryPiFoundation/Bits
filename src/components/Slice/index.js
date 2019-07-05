import { Base } from 'react-iotacss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Slice.scss'

/**
 * Not *that* kind of Slice.
 *
 * A Slice is a horizontal section of the website. The will almost always contain a `.o-container` element to constrain the width of the content.
 */
export const Slice = ({ children, className, white, ...props }) => {
  const classNames = classnames(
    'c-slice',
    {
      'c-slice--white': white,
    },
    className,
  )

  return (
    <Base {...props} className={classNames}>
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
