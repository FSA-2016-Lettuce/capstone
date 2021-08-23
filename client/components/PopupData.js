import React, {useState} from 'react'

 const PopupData = (props) => {
  const {pace, distance, name} = props.data;
  console.log(props)
  return (
    <div>
      <h2>{name}</h2>
      <h2>Pace: {pace}</h2>
      <h2>Distance: {distance}</h2>
      <button type='button' onClick={() => console.log('hello from: details')}>Details</button>
      <button type='button' onClick= {() => console.log('hello from join')}>Join Run</button>
    </div>
  )
}

export default PopupData
