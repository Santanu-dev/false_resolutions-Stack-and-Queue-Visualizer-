import { useState } from 'react';
import './App.css';
import AddResolutions from './components/AddResolutions';
import Stack from './components/Stack';
import Queue from './queueComponents/Queue';
import bgImg from './assets/backgroundImg.jpg'

function App() {

  const [stackList, setStackList] = useState([]);
  const [underflow, setUnderflow] = useState(false);
  const [storageType, setStorageType] = useState('stack');
  const [popAnimation, setPopAnimation] = useState(false); 

  const [queueList, setQueueList] = useState([]);
  const [dequeueAnimation, setDequeueAnimation] = useState(false);

  const [error, setError] = useState('')

  return (
    <div className="App">
      <div className='App-img'>
        <img src={bgImg}></img>
      </div>
      <div className='main-app'>
        <header className='header'>
          <div className="brand-heading">False <span>Resolutions</span></div>
          <div className='year'><span className='two'>2</span><span className='three'>3</span></div>
        </header>
        <main>
          <AddResolutions 
            queueList={queueList}
            onEnque={setQueueList}
            stackList={stackList} 
            setStackList={setStackList}
            onPush={setStackList}
            setUnderflow={setUnderflow}
            setStorageType={setStorageType}
            storageType={storageType}
            setDequeueAnimation={setDequeueAnimation}
            error={error}
            setPopAnimation={setPopAnimation}
            setError={setError}
            />
            {storageType === 'stack' ? 
              <Stack 
                stackList={stackList}
                underflow={underflow}
                popAnimation={popAnimation}
              />
              :
              <Queue
                queueList={queueList}
                dequeueAnimation={dequeueAnimation}
              />}
        </main>
      </div>
    </div>
  );
}

export default App;
