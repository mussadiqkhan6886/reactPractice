import { useEffect, useRef, useState } from "react"

function App() {
  
  const [elapsed, setElapsed] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalId = useRef(null)
  const startTime = useRef(0)

  useEffect(() => {
    if(isRunning){
      intervalId.current = setInterval(() => {
        setElapsed(Date.now() - startTime.current)
      }, 10)
    }

    return () => {
      clearInterval(intervalId.current)
    }

  }, [isRunning])

  function formateTime(){
    let hour = Math.floor(elapsed / (1000 * 60 * 60))
    let min = Math.floor(elapsed / (1000 * 60) % 60)
    let sec = Math.floor(elapsed / (1000) % 60)
    let milSec = Math.floor((elapsed % 1000) / 10)

    hour = String(hour).padStart(2, '0')
    min = String(min).padStart(2, '0')
    sec = String(sec).padStart(2, '0')
    milSec = String(milSec).padStart(2, '0')
    return `${hour}:${min}:${sec}:${milSec}`
  }

  function stop(){
    setIsRunning(false)
  }

  function start(){
    setIsRunning(true)
    startTime.current = Date.now() - elapsed 
  }
  function reset(){
    setElapsed(0)
    setIsRunning(false)
  }

  return (
    <>
      <div>
        <h1>{formateTime()}</h1>
        <div>
          <button onClick={stop}>stop</button>
          <button onClick={start}>start</button>
          <button onClick={reset}>reset</button>
        </div>
      </div>
    </>
  )
}

export default App
