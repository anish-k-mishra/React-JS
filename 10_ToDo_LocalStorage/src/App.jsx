import { useState, useEffect } from 'react'
import {ToDoProvider} from './contexts/Index'
import './App.css'
import TodoForm from './components/ToDoForm'
import TodoItem from './components/ToDoItems'

function App() {
  const [todo, setTodo] = useState([])

  const addTodo = (todo) => {
    setTodo((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodo((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !==id))
  }

  const toggleComplete = (id) => {
    setTodo((prev) => prev.map((prevTodo) =>  prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  //this useeffect os to display all the previously added todos when the application is reloaded
  useEffect(() => { //accessing the localStorage of react/JS
    //localStorage.getItem("todos") //this gives values in a string. "todos" is the key, whose value we want to get

    const todos = JSON.parse(localStorage.getItem("todo"));
    if(todos && todos.length >0){
      setTodo(todos)
    }
  }, [])

  //this todo is to store newly added todo to the local storage
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
    
  }, [todo])





  return (

    <ToDoProvider value={{todo, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {todo.map((todo) => (
                <div key={todo.id}
                  className='w-full'
                >
                  <TodoItem todo={todo}/>
                </div>
              ))}
            </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App
