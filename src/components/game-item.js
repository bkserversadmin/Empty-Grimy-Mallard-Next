import React, { useState } from 'react'

import PropTypes from 'prop-types'

import Tag from './tag'
import Date from './date'
import Venue from './venue'
import Status from './status'
import './game-item.css'

const GameItem = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="game-item-container">
      <div className="game-item-container01 bg-white">
        <div className="game-item-container02 px-3">
          <p className="font-bold game-item-text">{props.game_title}</p>
        </div>
        <div className="game-item-container03">
          <span className="game-item-text1 p-1 bg-gray-300 rounded-sm block">
            {props.game_id}
          </span>
        </div>
        <div className="game-item-container04">
          <Tag rootClassName="tag-root-class-name"></Tag>
        </div>
        <div className="game-item-container05">
          <Date rootClassName="date-root-class-name"></Date>
        </div>
        <div className="game-item-container06">
          <Venue rootClassName="venue-root-class-name"></Venue>
        </div>
        <div className="game-item-container07">
          <Status rootClassName="status-root-class-name"></Status>
        </div>
        <div className="game-item-container08"></div>
        <div className="game-item-container09"></div>
      </div>
    </div>
  )
}

GameItem.defaultProps = {
  game_level: '12U',
  game_title: 'Team A vs Team B',
  text: 'Text',
  game_id: '#231',
}

GameItem.propTypes = {
  game_level: PropTypes.string,
  game_title: PropTypes.string,
  text: PropTypes.string,
  game_id: PropTypes.string,
}

export default GameItem
