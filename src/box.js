import React from 'react';
import './box.css'

export default function Box(props){

  return(
    <div className="box-container">
      <div className="box" style={{backgroundColor: props.color}} >
      </div>
    </div>
  )

}