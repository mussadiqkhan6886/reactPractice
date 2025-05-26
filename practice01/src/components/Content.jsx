import React, {useContext} from 'react'
import { ListContext } from '../context/ListContext'
import Data from './Data'

const Content = () => {

  const {loading, error} = useContext(ListContext)
  
  return (
    <>
      {loading && <h1 className='text-center font-medium text-xl mt-1 text-blue-900'>Loading...</h1>}
      {error && <h1 className='text-center font-medium text-xl mt-1 text-red-500'>Did not get any data from server</h1>}
      {!error && !loading && <Data />} 
    </>
    
  )
}

export default Content
