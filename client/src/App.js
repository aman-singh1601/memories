import React from 'react'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import './App.css'



function App() {

  return (
    <div >
      <nav className='home_header'>
        <h2 className='header_heading'>Memories</h2>
        <img className='header_image'  src='https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI'
         alt='' />
      </nav>
      <div>  
        <div >
            <div >
                <Posts/>
            </div>
            <div >
                <Form/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;