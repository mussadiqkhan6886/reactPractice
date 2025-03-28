import { useState } from "react"

function App(){
  const [lists, setLists] = useState([])
  const [newTask, setNewTask] = useState('')
  // let updatedList = []

  function addItem(){
    if(newTask.trim() !== ''){
      setLists([...lists, newTask])
      setNewTask('')
    }
  }

  function removeList(index){
    setLists(lists.filter((_, i) => i !== index))
  }

  function moveUp(index){
    if(index > 0){
       let updatedList = [...lists]
      [updatedList[index], updatedList[index - 1]] = [updatedList[index - 1], updatedList[index]]
      setLists(updatedList)
    }
  }

  function moveDown(index){
    if(index < lists.length - 1){
       let updatedList = [...lists]
      [updatedList[index], updatedList[index + 1]] = 
      [updatedList[index + 1], updatedList[index]]
      setLists(updatedList)
    }
  }

  return(
    <>
      <h1>ToDo List React</h1>
      <input value={newTask} type="text" placeholder="Enter todo work" onChange={e => setNewTask(e.target.value)} />
      <button onClick={addItem}>Add</button>
      <ul>
        {lists.map((list, index) => 
        <li key={index}>{list} 
        <button onClick={() => removeList(index)}>Remove</button>
        <button onClick={() => moveUp(index)}>up</button>
        <button onClick={() => moveDown(index)}>down</button>
        </li>
        )}
      </ul>
    </>  
  )

}

export default App