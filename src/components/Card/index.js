import { Base } from 'react-iotacss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Card.scss'
import Link from '../Link'

const Card = ({
  children,
  className,
  heading,
  imageAlt,
  imageSrc,
  imageTitle,
  to,
  ...props
}) => {
  const isLink = () => typeof to === 'string'

  const classNames = classnames('c-card', className, {
    'c-card--link': isLink(),
  })

  const imageJSX = () => {
    if (!imageSrc) {
      return null
    }

    return (
      <Base
        alt={imageAlt}
        className="c-card__image"
        src={imageSrc}
        tagName="img"
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

  const cardChildren = () => (
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
      <Link className={classNames} excludeClassname={true} to={to} {...props}>
        {cardChildren()}
      </Link>
    )
  }

  return (
    <Base className={classNames} {...props}>
      {cardChildren()}
    </Base>
  )
}

Card.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** @ignore */
  className: PropTypes.string,
  heading: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  imageTitle: PropTypes.string,
  /** relative or qualified URL - determines if component renders `<a>` or `<div>` */
  to: PropTypes.string,
}

export default Card
