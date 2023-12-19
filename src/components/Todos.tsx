import React from "react"
import Todo from "../models/todo"
import TodoItem from "./Todo"
import c from "./Todos.module.css"

const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul className={c.todos}>
            {
                props.items.map(item => <TodoItem text={item.text} key={item.id} />)
            }
        </ul>
    )
}

export default Todos