import { Base } from 'react-iotacss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Pagination.scss'
import Link from '../Link'

const Pagination = ({
  className,
  linkNextHref,
  linkNextLabel,
  linkPrevHref,
  linkPrevLabel,
  pageCurrent,
  pageMax,
}) => {
  const classNames = classnames('c-pagination', className)
  const nextLinkclassNames = classnames({
    'c-pagination__link': true,
    'c-pagination__link--next': true,
    'c-pagination__link--disabled': pageCurrent === pageMax,
  })
  const prevLinkclassNames = classnames({
    'c-pagination__link': true,
    'c-pagination__link--prev': true,
    'c-pagination__link--disabled': pageCurrent === 1,
  })

  return (
    <Base className={classNames}>
      <Link className={prevLinkclassNames} to={linkPrevHref}>
        <span className="u-hidden">{linkPrevLabel}</span>
      </Link>

      <span className="c-pagination__label">
        Page {pageCurrent} of {pageMax}
      </span>

      <Link className={nextLinkclassNames} to={linkNextHref}>
        <span className="u-hidden">{linkNextLabel}</span>
      </Link>
    </Base>
  )
}

Pagination.propTypes = {
  className: PropTypes.string,
  linkNextHref: PropTypes.string.isRequired,
  linkNextLabel: PropTypes.string.isRequired,
  linkPrevHref: PropTypes.string.isRequired,
  linkPrevLabel: PropTypes.string.isRequired,
  pageCurrent: PropTypes.number.isRequired,
  pageMax: PropTypes.number.isRequired,
}

export default Pagination
