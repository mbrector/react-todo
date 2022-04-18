import {React, useState, useEffect} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import {getTodo, deleteTodo} from '../services/todos-api'

function View() {
    const navigate = useNavigate()
    const {id} = useParams()
    const [todoList, setTodoList] = useState({})
    useEffect(() => {
        getTodo(id)
        .then(res => setTodoList(res.data))
    }, [])

        const deleteTheTodo = () => {
            deleteTodo(id)
            navigate('/')
        }

  return (
      <div>
        <h2>To Do:</h2>
        <h2>{todoList.description}</h2><br /><br />
        Complete: <input type="checkbox" checked={todoList.complete} /><br />
        <button onClick={() => {navigate(`/${id}/Edit`)}}>Edit To Do</button>
        <button onClick={deleteTheTodo}>Delete</button>
    </div>
  )
}

export default View