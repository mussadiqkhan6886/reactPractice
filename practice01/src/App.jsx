import { useEffect, useState } from 'react'
import Cell from './Cell'
import './App.css'

function App(){
  const [cells, setCells] = useState(['', '', '','', '', '','', '', ''])
  const [go, setGo] = useState('circle');
  const [winningMsg, setWinningMsg] = useState(null)

  const message = `It is now ${go}'s go`

  const checkScore = () => {
    const winningCombos = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ]

    winningCombos.forEach(array => {
      const circleWin = array.every(cell => cells[cell] == 'circle')
      if(circleWin){
        setWinningMsg('circle Win!')
        return
      }
    })
    winningCombos.forEach(array => {
      const crossWin = array.every(cell => cells[cell] == 'cross')
      if(crossWin){
        setWinningMsg('cross Win!')
        return
      }
    })
  }

  useEffect(() => {
    checkScore()
  }, [cells])

  return (
    <div className='grid'>
     <div className='gameBoard'>
        {cells.map((cell, index) => 
        <Cell
            cell={cell}
            id={index}
            key={index}
            go = {go}
            setGo = {setGo}
            cells = {cells}
            setCells = {setCells}
            winningMsg = {winningMsg}
        />)}
     </div>
     <p>{winningMsg || message}</p>
    </div>
  )
}

export default App
