
import { useState } from 'react'
import NewTodo from './components/NewTodo'
import Todos from './components/Todos'
import Todo from './models/todo'

function App() {

  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (todoText: string) => {

    setTodos((prev) => prev.concat(new Todo(todoText)))
  }

  const removeTodoHandler = (todoId: string) => {

    setTodos((prev) =>{
      return prev.filter(todo => todo.id !== todoId)
    } )

    console.log("sd"  , todoId);
   
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} removeTodoHandler={removeTodoHandler} />
    </div>
  )
}

export default App
