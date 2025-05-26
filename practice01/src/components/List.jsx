const List = ({id, list, item, checked, setList}) => {

  const handleCheckChange = (id) => {
    const changedList = list.map(items => items.id === id ? {...items, checked: !checked} : items)
    setList(changedList)
  }
  
  const handleDelete = (id) => {
    setList(list.filter((item) => item.id != id))
  }

  return (
    <li className='flex justify-between'>
      <div className='flex gap-5'>
        <input className='w-6 cursor-pointer' type="checkbox" value={checked} onChange={() => handleCheckChange(id)} checked={checked} />
        <p className={`text-xl ${checked ? "line-through" : ""}`}>{item}</p>
      </div>
      
      <button onClick={() => handleDelete(id)} className='border-red-500 bg-red-100 hover:bg-red-600 hover:text-white cursor-pointer px-4 py-1 border'>Delete</button>
    </li>
  )
}

export default List
