import {React, useState, useEffect} from 'react'
import {getTodos} from '../services/todos-api'

function Todos() {
const [todoList, setTodoList] = useState([])
    useEffect(() => {
        getTodos()
        .then(res => setTodoList(res.data))
    }, [])
    console.log(todoList)

    return (
        <div>
            <h1>To Do List</h1>
            <ul className= "todo">
                {todoList.map((todo, i) => {
                    return(
                        todo.complete?
                        <li key = {i}>
                            <strike><h2><a href = {`/${todo._id}`}>{todo.description}</a></h2></strike>
                        </li>
                        :<li key = {i}>
                            <h2><a style={{backgroundColor:'aquamarine'}} href = {`/${todo._id}`}>{todo.description}</a></h2>
                        </li>                  
                    )
                })}
            </ul>
        </div>
    )
}

export default Todos