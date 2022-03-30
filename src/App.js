import {useState, useEffect} from 'react'
import './App.css'
import {getTodos} from './services/todos-api'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Todos from './components/Todos'

function App() {
  const [todoList, setTodoList] = useState([])
  useEffect(() => {
    getTodos()
    .then(res => setTodoList(res.data))
  }, [])
  console.log(todoList)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Todos />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App