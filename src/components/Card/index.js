import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Link from '../Link'

import './Card.scss'

const Card = ({
  children,
  className,
  gridColumn,
  heading,
  imageAlt,
  imageSrc,
  imageTitle,
  to,
  ...props
}) => {
  const isGridColumn = () => gridColumn
  const isLink = () => to !== null

  const classNames = classnames('c-card', className, {
    'c-card--col': isGridColumn(),
    'c-card--link': isLink(),
  })

  const imageJSX = () => {
    if (!imageSrc) {
      return null
    }

    return (
      <img
        alt={imageAlt}
        className="c-card__image"
        src={imageSrc}
        title={imageTitle}
      />
    )
  }

  const headingJSX = () => {
    if (!heading) {
      return null
    }

    return <span className="c-card__heading">{heading}</span>
  }

  const cardChildren = (
    <div>
      {imageJSX()}
      <div className="c-card__content">
        {headingJSX()}
        {children}
      </div>
    </div>
  )

  if (isLink()) {
    return (
      <Link {...props} className={classNames} excludeClassname={true} to={to}>
        {cardChildren}
      </Link>
    )
  }

  return (
    <div {...props} className={classNames}>
      {cardChildren}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gridColumn: PropTypes.bool,
  heading: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  imageTitle: PropTypes.string,
  to: PropTypes.string,
}

export default Card
