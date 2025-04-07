function Cell({id, cell, go, setGo, cells, setCells, winningMsg}){

    const handleClick = (e) => {
        if(!winningMsg){
            const taken = e.target.firstChild?.classList.contains('circle') || 
                          e.target.firstChild?.classList.contains('cross') || 
                          e.target.classList.contains('cross') || 
                          e.target.classList.contains('circle')

        if(!taken){
            if(go == 'circle'){
                e.target.firstChild.classList.add('circle')
                setGo('cross')
                handleCellChange('circle')
            }
            if(go == 'cross'){
                e.target.firstChild.classList.add('cross')
                setGo('circle')
                handleCellChange('cross')
            }
        }
        }
        
    }

    const handleCellChange = (className) => {
        const next = cells.map((cell, index) => {
            if(index == id){
                return className
            }else{
                return cell
            }
        })
        setCells(next)
    }
    // console.log(cells)

    return(
        <div id={id} className="square" onClick={handleClick}>
            <div className={cell}>
                
            </div>
        </div>
    )
}
export default Cell