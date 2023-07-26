import React from 'react'

import PropTypes from 'prop-types'

import './tag.css'

const Tag = (props) => {
  return (
    <div className={`tag-container ${props.rootClassName} `}>
      <span className="bg-blue-500 block rounded-sm p-3">{props.text}</span>
    </div>
  )
}

Tag.defaultProps = {
  rootClassName: '',
  text: 'Text',
}

Tag.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Tag
