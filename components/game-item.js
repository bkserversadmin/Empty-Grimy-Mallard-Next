import React, { useState } from 'react'

import PropTypes from 'prop-types'

import Tag from './tag'
import Date from './date'
import Venue from './venue'
import Status from './status'

const GameItem = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
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
      <style jsx>
        {`
          .game-item-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .game-item-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: center;
          }
          .game-item-container02 {
            flex: 3;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .game-item-container03 {
            flex: 1;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .game-item-text1 {
            align-self: center;
          }
          .game-item-container04 {
            flex: 1;
            width: 200px;
            height: auto;
            display: flex;
            position: relative;
            flex-direction: column;
          }
          .game-item-container05 {
            flex: 1;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .game-item-container06 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .game-item-container07 {
            flex: 1;
            width: 200px;
            height: 100px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .game-item-container08 {
            flex: 1;
            width: 200px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .game-item-container09 {
            flex: 1;
            width: 200px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          @media (max-width: 1200px) {
            .game-item-container01 {
              align-items: center;
              flex-direction: row;
              justify-content: flex-start;
            }
            .game-item-container02 {
              flex: 3;
              width: 289px;
              position: relative;
              align-items: center;
              margin-right: 0px;
              justify-content: center;
            }
            .game-item-text {
              align-self: flex-start;
            }
            .game-item-container03 {
              flex: 1;
              width: 125px;
            }
            .game-item-text1 {
              align-self: center;
            }
            .game-item-container05 {
              flex: 1;
              width: 115px;
              margin-right: 0px;
            }
            .game-item-container06 {
              flex: 1;
              width: 135px;
            }
            .game-item-container07 {
              flex: 1;
              width: 89px;
            }
            .game-item-container08 {
              flex: 1;
              width: 132px;
            }
            .game-item-container09 {
              flex: 1;
              width: 212px;
            }
          }
        `}
      </style>
    </>
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
