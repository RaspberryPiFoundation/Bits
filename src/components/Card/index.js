import { Base } from 'react-iotacss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Card.scss'
import Link from '../Link'

/**
 * Cards are used a lot, and are fairly flexible. The contents of a card should never be too complicated. An optional image can be added, and the whole card can be a link if necessary (or you can add a regular link to the card's content too if you prefer). They will always stretch to 100% the width of their parent, and are intended for use within the iota grid system.
 */
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
    <Base {...props} className={classNames}>
      {cardChildren}
    </Base>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  heading: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  imageTitle: PropTypes.string,
  to: PropTypes.string,
}

export default Card
