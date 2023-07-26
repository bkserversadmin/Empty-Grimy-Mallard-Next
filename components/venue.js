import React from 'react'

import PropTypes from 'prop-types'

const Venue = (props) => {
  return (
    <>
      <div className={`venue-container ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="venue-icon">
          <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
        </svg>
        <span>{props.venue}</span>
        <svg viewBox="0 0 1024 1024" className="venue-icon2 opacity-50">
          <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM554.667 682.667v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v170.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM554.667 341.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
        </svg>
      </div>
      <style jsx>
        {`
          .venue-container {
            gap: var(--dl-space-space-halfunit);
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .venue-icon {
            width: 24px;
            height: 24px;
          }
          .venue-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
        `}
      </style>
    </>
  )
}

Venue.defaultProps = {
  rootClassName: '',
  venue: 'CA',
}

Venue.propTypes = {
  rootClassName: PropTypes.string,
  venue: PropTypes.string,
}

export default Venue
