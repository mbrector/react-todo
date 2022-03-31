import {React, useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import {getTodos} from '../services/todos-api'

function View() {
const [todoList, setTodoList] = useState([])
    useEffect(() => {
        getTodos()
        .then(res => setTodoList(res.data[id]))
    }, [])
    // console.log(todoList)

    let navigate = useNavigate()
    let{id} = useParams()
    // console.log({id})

  return (
      <div>
        <h2>To Do:</h2>
        <h2>{todoList.description}</h2><br /><br />
        <button onClick={() => {navigate("/")}}>To Do List</button>
    </div>
  )
}

export default View