import React from 'react'

import PropTypes from 'prop-types'

import './status.css'

const Status = (props) => {
  return (
    <div
      className={`status-container rounded-md bg-green-200 ${props.rootClassName} `}
    >
      <span className="text-Gray-500">{props.status}</span>
    </div>
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
