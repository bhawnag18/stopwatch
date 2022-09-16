import React, { useState,useEffect } from 'react';
import './DisplayContent.css';

const DisplayContent=()=>{
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const[time,setTime]=useState({
        ms:0,
        s:0,
        m:0,
        h:0
    })

    useEffect(() => {
        let interval = null;
      
        if (isActive && isPaused === false) {
          interval = setInterval(run,10);
        } else {
          clearInterval(interval);
        }
        return () => {
          clearInterval(interval);
        };
      }, [isActive, isPaused]);
    const [status,setStatus]=useState(true);
   
   
    
    var updatedMs = time.ms, 
    updatedS = time.s, 
    updatedM = time.m, 
    updatedH = time.h;



    
const start=()=>{
   setStatus(false)
   setIsActive(true);
   setIsPaused(false);
   

}

// console.log(interv)
const run=()=>{
    if(updatedMs>=100)
    {
        updatedS++;
        updatedMs=0;
    }
    if(updatedS>=60)
    {
        updatedM++;
        updatedMs=0;
        updatedS=0;
    }
    if(updatedM>=60)
    {
        updatedH++;
        updatedMs=0;
        updatedS=0;
        updatedM=0;
    }
    
    updatedMs++;
    setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
}

const pauseResume=()=>{
    console.log('pause');
    setIsPaused(!isPaused);
  };


const reset=()=>{
    setTime({
        ms:0,
        s:0,
        m:0,
        h:0
    })
    setIsActive(false);
    setStatus(true);
    
    
}



  return(
    <>
    <div className='main'>
        <div>
        <p data-text='STOPWATCH'>STOPWATCH</p>
        </div>
        <div className='content border sides'>
            <div className='content-i'>
      <h1><span>{time.h>=10?time.h:'0'+time.h}</span>&nbsp;&nbsp;<span>{time.m>=10?time.m:'0'+time.m}</span>&nbsp;&nbsp;<span>{time.s>=10?time.s:'0'+time.s}</span>&nbsp;&nbsp;<span>{time.ms>=10?time.ms:'0'+time.ms}</span>&nbsp;&nbsp;</h1>
      </div>
      </div>
      <div className='btnn'>
        <div>

      {
        status?<div><button  className='btn btn-1' onClick={start}>Start</button></div>:
        <div>
            {
                isPaused?<button className='btn btn-1'  onClick={pauseResume}>Pause</button>:<button className='btn btn-1' onClick={pauseResume}>Resume</button>
            }
           
           
           <button className='btn btn-1' onClick={reset}>Reset</button>
           </div>
      }
      
      </div>
      </div>

      </div>
    </>
  )
}
export default DisplayContent;