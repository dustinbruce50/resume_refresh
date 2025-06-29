import React from 'react'
import Transfer from './Transfer'
import Chat from './Chat'
import WOM from './WOM'
import Taco from './Taco'

const FSHome = () => {
  return (
    <div className="home">
      <h1 className="heading">Full Stack Projects</h1>
      <div className="drawer-container">
      <Transfer />
      <Chat />
      <WOM />
      <Taco />
      </div>
    </div>
  )
}

export default FSHome