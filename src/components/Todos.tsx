import React from "react"
import Todo from "../models/todo"
import TodoItem from "./Todo"
import c from "./Todos.module.css"

const Todos: React.FC<{ items: Todo[] , removeTodoHandler:(id : string)=> void}> = (props) => {
    return (
        <ul className={c.todos}>
            {
                props.items.map(item => <TodoItem id={item.id} removeTodoHandler={props.removeTodoHandler} text={item.text} key={item.id} />)
            }
        </ul>
    )
}

export default Todos