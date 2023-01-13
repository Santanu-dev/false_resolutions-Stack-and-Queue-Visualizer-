import React, { useState } from 'react'
import qArrow from '../assets/qArrow.png'
import './Queue.css'
import QDSImg from '../assets/QDS.png'

const Queue = ({ queueList, dequeueAnimation }) => {

  const [openInfo, setOpenInfo] = useState(false);

  return (
    <div className='queue'>
      <div className='queueleft'>
        <img className='leftArrow' src={qArrow} />
        <h1>TAIL</h1>
      </div>
      <div className='queuemid'>
        {queueList.map((item, index) => {
          return(
            index%2 === 0 ? 
            <div key={index}
             className= {dequeueAnimation ? "queueItem dequeueAnimation" :'queueItem'}
             style={{background: 'var(--text-primary)', color: 'var(--text-secondary)'}}
             >
              {item}
            </div>
            :
            <div key={index}
             className={dequeueAnimation ? "queueItem dequeueAnimation" : 'queueItem'}
             style={{background: 'var(--text-secondary)', color: 'var(--text-primary)'}}
             >
              {item}
            </div>
          )
        })}
        {/* <div className='queueItem'>my resolution</div>
        <div className='queueItem'>my resolution</div>
        <div className='queueItem'>my resolution</div>
        <div className='queueItem'>my resolution</div> */}
      </div>
      <div className='queueright'>
        <img className='rightArrow' src={qArrow} />
        <h1>HEAD</h1>
      </div>
      <div className='infoQueueBtn' onClick={() =>{openInfo ? setOpenInfo(false) : setOpenInfo(true)}}>
        {openInfo ? "X" : "!"}
      </div>
      {openInfo ? <img className='queueInfo queueInfoOpen' src={QDSImg} /> : "" }
    </div>
  )
}

export default Queue