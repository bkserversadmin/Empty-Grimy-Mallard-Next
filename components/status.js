import React from 'react'

import PropTypes from 'prop-types'

const Status = (props) => {
  return (
    <>
      <div
        className={`status-container rounded-md bg-green-200 ${props.rootClassName} `}
      >
        <span className="text-Gray-500">{props.status}</span>
      </div>
      <style jsx>
        {`
          .status-container {
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Status.defaultProps = {
  status: 'Published',
  rootClassName: '',
}

Status.propTypes = {
  status: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Status
