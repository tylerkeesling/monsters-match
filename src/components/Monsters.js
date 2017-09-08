import React from 'react'
import Monster from './Monster'
import './main.css'

const Monsters = ({ monsters }) => {
  return (
    <div className="flex-container">
      { monsters.map(monster => <Monster key={ monster.id } monster={ monster } />)}
    </div>
  )
}

export default Monsters
