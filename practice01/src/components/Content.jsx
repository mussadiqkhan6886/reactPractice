import React, {useContext} from 'react'
import { ListContext } from '../context/ListContext'
import List from './List'

const Content = () => {

  const {list, setList} = useContext(ListContext)
  
  return (
    <>
      {list.length ? (
        <div className=' flex flex-col gap-3 h-full overflow-x-hidden p-4 overflow-scroll'>
      {list.map((item) => (
        <List key={item.id} id={item.id} list={list} item={item.item} checked={item.checked} setList={setList}/>
      ))}
    </div>
      ) : (
        <div className='flex justify-center items-center h-full'>
          <h1 className='text-2xl text-white'>No Items in list</h1>
        </div>
      )}
    </>
    
  )
}

export default Content
