
function Food({food1 = 'tomato', food2 = 'tomato', extra = false}){
        if(extra){
            return(
                <main>
                    <h2>Food List</h2>
                    <ol>
                        <li>Apple</li>
                        <li>{food1}</li>
                        <li>{food2.toUpperCase()}</li>
                        <li>watermelon</li>
                    </ol>
                </main>
            )
        }else{
            return(
            <main>
                <h2>Food List</h2>
                <ol>
                    <li>Apple</li>
                    <li>{food1}</li>
                    <li>{food2.toUpperCase()}</li>
                    
                </ol>
            </main>
            )
        }

}


export default Food