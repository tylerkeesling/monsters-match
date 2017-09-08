import React from 'react'
import { Card, CardTitle } from 'react-materialize'
import './main.css'

const Monster = ({ monster }) => {
const isScary = monster.scary ? "Yes, very scary." : "No, I'm harmless."

  return (
    <Card className='large card'
      header={<CardTitle image={ monster.image }>My name is: <span>{ monster.name}</span></CardTitle>}>
	     <p className='bold-p'>Number of eyes: { monster.eyes }</p>
       <p className='bold-p'>Am I scary: { isScary }</p>
       <p>{ monster.description }</p>
    </Card>
  )
}

export default Monster
