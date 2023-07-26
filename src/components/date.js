import React from 'react'

import PropTypes from 'prop-types'

import './date.css'

const Date = (props) => {
  return (
    <div className={`date-container ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="date-icon">
        <path
          d="M298.667 85.333v42.667h-85.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-85.333v-42.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v42.667h-256v-42.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM853.333 384h-682.667v-128c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h85.333v42.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-42.667h256v42.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-42.667h85.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165zM170.667 469.333h682.667v384c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165z"
          className=""
        ></path>
      </svg>
      <span className="">{props.date}</span>
    </div>
  )
}

Date.defaultProps = {
  rootClassName: '',
  date: 'May 8th - 08:00 PM',
}

Date.propTypes = {
  rootClassName: PropTypes.string,
  date: PropTypes.string,
}

export default Date
