import React from 'react';
import ProgressiveImage from '../../utils/progressive-image';
import WithLink from '../../utils/with-link';

/**
 * An Image.
 */

export default function Image(props) {
  const {
    /* Options */
    src,
    placeholder,
    alt,
    figcaption,
    height,
    width,
    customClass,
    onClick,
    /* Children */
    withLinkProps
  } = props;

  const heightVal = height ? `${height}px` : 'auto';
  const widthVal = width ? `${width}px` : '100%';

  const dimensions = {
    height: heightVal,
    width: widthVal,
    maxWidth: '100%'
  };

  return (
    <figure className="image__figure">
      <div style={dimensions}>
        <WithLink
          style={dimensions}
          className={`image__wrapper  ${customClass ? customClass : ''}`}
          {...(withLinkProps && { withLinkProps })}
          {...(onClick && { onClick })}
        >
          <ProgressiveImage
            src={src}
            placeholder={placeholder}
            dimensions={dimensions}
            alt={alt}
          />
        </WithLink>
      </div>

      {figcaption && (
        <figcaption className="image__figcaption">{figcaption}</figcaption>
      )}
    </figure>
  );
}