import React from 'react'

import PropTypes from 'prop-types'

const Tag = (props) => {
  return (
    <>
      <div className={`tag-container ${props.rootClassName} `}>
        <span className="bg-blue-500 block rounded-sm p-3">{props.text}</span>
      </div>
      <style jsx>
        {`
          .tag-container {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .tag-root-class-name {
            top: 0px;
            left: 74px;
            position: static;
            align-self: center;
          }
        `}
      </style>
    </>
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
