import { useContext } from "react"
import { ListContext } from "../context/ListContext"
import ApiRequest from "../ApiRequest"

const List = ({id, list, item, checked, setList}) => {
  const {URL, setError} = useContext(ListContext)

  const handleCheckChange = async (e, id) => {
    e.preventDefault()
    const changedList = list.map(items => items.id === id ? {...items, checked: !checked} : items)
    setList(changedList)

    const newItem = changedList.filter(item => item.id == id)
    const updateOpt = {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({checked: newItem[0].checked})
    }
    const reqUrl = `${URL}/${id}`
    const result = await ApiRequest(reqUrl, updateOpt)
    if(result) setError(result)
    console.log(newItem[0].checked)
  }
  
  const handleDelete = async (id) => {
    setList(list.filter((item) => item.id != id))
    const option = {method: "DELETE"}
    const reqUrl = `${URL}/${id}`
    const result = await ApiRequest(reqUrl, option)
    if(result) setError(result)
  }

  return (
    <li className='flex justify-between'>
      <div className='flex gap-5'>
        <input className='w-6 cursor-pointer' type="checkbox" value={checked} onChange={(e) => handleCheckChange(e, id)} checked={checked} />
        <p className={`break-words whitespace-normal max-w-xs text-xl ${checked ? "line-through" : ""}`}>{item}</p>
      </div>
      
      <button onClick={() => handleDelete(id)} className='border-red-500 bg-red-100 hover:bg-red-600 hover:text-white cursor-pointer px-4 py-1 border'>Delete</button>
    </li>
  )
}

export default List
