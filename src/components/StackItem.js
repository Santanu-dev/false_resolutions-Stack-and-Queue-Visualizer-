import React from 'react'
import './StackItem.css'

const StackItem = ({ bgColor, textColor, item, keyIndex, popAnimation, stackList }) => {
  return (
    <div 
     key={keyIndex}
     className={popAnimation ?
       'itemsInStack stackPushAmination popAnimation' 
       :
      'itemsInStack stackPushAmination'} 
      style={{background: `${bgColor}`, color: `${textColor}`}}>
        {item}
      </div>
  )
}

export default StackItem