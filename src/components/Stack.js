import React, { useState } from 'react'
import './Stack.css'
import StackItem from './StackItem'
import stackTopImg from '../assets/arrowStackTop.png'
import stackDS from '../assets/SDS.png'

const Stack = ({ stackList, underflow, popAnimation }) => {

  return (
    <div className='stackArea'>
      <div className='leftSection'>
        <img src={stackTopImg} />
        <h1 className='text'>STACK TOP</h1>
      </div>
      <div className='mid'>
      <div className='storageBucket'>
        {underflow && <span>Stack Under Flow!!</span>}
          {stackList.map((item, index) => {
            return index%2 === 0 ? 
            <StackItem keyIndex={index} 
              item={item} 
              bgColor={'var(--text-secondary)'} 
              textColor={'var(--text-primary'}
              popAnimation={popAnimation}
              stackList={stackList}
              /> 
            : 
            <StackItem keyIndex={index} 
              item={item} 
              bgColor={'var(--text-primary)'} 
              textColor={'var(--text-secondary)'}
              popAnimation={popAnimation}
              stackList={stackList}
              />
          })}
        </div>
        <div className='stackHeading'>Mountain of Resolutions!</div>
      </div>
      <div className='RightSection'>
        <div className='info'>
          <img src={stackDS} /> 
          <div>
          <a href='https://www.geeksforgeeks.org/stack-data-structure/' target="_blank">More Info</a> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stack