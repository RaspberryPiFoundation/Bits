import { Base } from 'react-iotacss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Panel.scss'

/**
 * A panel is a discreet chunk of content, or a huge block. Up to you. Gives you a panel with some padding, which you can alter. A border radius, which you can alter, and you can shadows and borders to your heart's content. Add an inner box shadow for a well.
 */
export const Panel = ({ children, className, ...props }) => {
  const classNames = classnames('c-panel', className)

  return (
    <Base {...props} className={classNames}>
      {children}
    </Base>
  )
}

Panel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Panel
