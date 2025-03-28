import { useState } from "react"

function App(){
  const [list, setList] = useState([])
  const [newTask, setNewTask] = useState('')

  return(
    <>
      <h1>ToDo List React</h1>
    </>  
  )

}

export default App