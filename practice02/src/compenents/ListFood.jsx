function ListFood(){
    const fruits = ['watermelon', 'strawberry', 'banana', 'kiwi']

    const listItems = fruits.map((fruit, index) => <li id={index}>{index+1}. {fruit}</li>)

    return(
        <ol>{listItems}</ol>
    )
}

export default ListFood