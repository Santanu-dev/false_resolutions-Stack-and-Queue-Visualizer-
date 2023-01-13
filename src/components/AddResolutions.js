import React, { useState } from 'react'
import './AddResolutions.css'

const AddResolutions = ({ stackList, setStackList,
                          onPush, setUnderflow, setStorageType, 
                          storageType, onEnque, queueList,
                          setDequeueAnimation,
                          error,
                          setError,
                          setPopAnimation
                        }) => {

  const [resolution, setResolution] = useState('');

  const handleSelectBox = (event) => {
    setError('')
    setStorageType(event.target.value);
  }

  const handleInputChange = (event) => {
    setResolution(event.target.value);
  }

  const handlePush = (event) => {
    event.preventDefault();

    if(resolution === ""){
      setError('At least enter the resolution na!!!')
      return;
    }

    if(storageType === "stack"){

      if(stackList.length < 5){
        setUnderflow(false)
        setError('')
        onPush([...stackList, resolution])
        setResolution('')
      }else{
        setError('Stack OverFlow!!')
      }
    }else{
      if(queueList.length < 5){
        // setUnderflow(false)
        setError('')
        onEnque([...queueList, resolution])
        setResolution('')
      }else{
        setError('Queue is Full!!')
      }
    }
  }

  const handlePop = (event) => {
    event.preventDefault()
    if(stackList.length !== 0){
      setError("")
      setUnderflow(false)
      setPopAnimation(true)
      setTimeout(() => {
        setStackList(stackList.splice(0, stackList.length-1))
        setPopAnimation(false)
      }, 1000)
    }else{
      setUnderflow(true)
    }
  }

  const handleDequeue = (event) => {
    event.preventDefault()
    if(queueList.length !== 0){
      // setUnderflow(false)
      setError('')
      setDequeueAnimation(true)
      setTimeout(() => {
        onEnque(queueList.splice(1, queueList.length))
        setDequeueAnimation(false)
      }, 750)
    }else{
      setError('Empty Queue')
    }
  }

  return (
    <div className='add-resolutions'>
        <form className='form-group'>
            <input className='form-control' onChange={handleInputChange} 
              value={resolution} type='text' 
              placeholder='Dump Your Resolution here... (Max 5)' 
            />
            
            <div className='btn-group'>
              <button className='addButton' onClick={handlePush} >{storageType === 'stack' ? "Push" : "Enqueue" }</button>
              {storageType === 'queue' ?
              <button className='addButton' style={{background: 'rgb(196, 60, 60)', color: '#f4f4f4'}} onClick={handleDequeue} >Dequeue</button>
              :
              <button className='addButton' style={{background: 'rgb(196, 60, 60)', color: '#f4f4f4'}} onClick={handlePop} >Pop</button>
              }
            </div>
            
            <select className='select-box' onChange={handleSelectBox}>
                <option style={{textAlign: 'center'}} value="stack" >Stack</option>
                <option style={{textAlign: 'center'}} value="queue" >Queue</option>
            </select>
        </form>
        {<span className='errorText' style={{color: 'red', padding: '6em'}}>{error}</span>}
    </div>
  )
}

export default AddResolutions