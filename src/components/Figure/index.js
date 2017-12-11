import { Base } from 'react-iotacss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import './Figure.scss'

export const Figure = ({
  className,
  imageAlt,
  imageSrc,
  imageTitle,
  ...props
}) => {
  const classNames = classnames('c-figure', className)
  const hasCaption = typeof caption === 'string'
  const figCaption = () => {
    if (hasCaption) {
      return <figcaption classNames="c-figure__caption">{caption}</figcaption>
    }
    return null
  }

  return (
    <Base {...props} className={classNames} tagName="figure">
      <img
        alt={imageAlt}
        className="c-figure__image"
        src={imageSrc}
        title={imageTitle}
      />
      {figCaption()}
    </Base>
  )
}

Figure.propTypes = {
  caption: PropTypes.string,
  className: PropTypes.string,
  imageAlt: PropTypes.string,
  imageTitle: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
}

export default Figure
