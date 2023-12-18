
import Todos from './components/Todos'
import Todo from './models/todo'

function App() {

  const todos = [
    new Todo('learn'),
    new Todo('make')
  ]

  return (
    <div>
        <Todos items={todos} />
    </div>
  )
}

export default App
