import React, {useContext} from 'react'
import { ListContext } from '../context/ListContext'
import List from './List'

const Content = () => {

  const {list, setList} = useContext(ListContext)
  
  return (
    <div className=' flex flex-col gap-3  p-4'>
      {list.map((item) => (
        <List key={item.id} id={item.id} list={list} item={item.item} checked={item.checked} setList={setList}/>
      ))}
    </div>
  )
}

export default Content
