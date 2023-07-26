import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Empty Grimy Mallard</title>
        <meta property="og:title" content="Empty Grimy Mallard" />
      </Helmet>
    </div>
  )
}

export default Home
