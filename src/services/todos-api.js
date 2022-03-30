import axios from "axios"
const URL = 'http://localhost:3001/todos'

export const getTodos = () => {
    const response = axios.get(URL)
    return response
}