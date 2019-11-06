import { Base } from 'react-iotacss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * Places a component, hidden from display which forces a page break before it when printing
 */
export const PrintPageBreak = ({ children, className, ...props }) => {
  const classNames = classnames(className, 'c-print-page-break')

  return <Base className={classNames} {...props} />
}

PrintPageBreak.propTypes = {
  className: PropTypes.string,
}

export default PrintPageBreak
