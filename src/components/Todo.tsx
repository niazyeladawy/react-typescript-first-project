import c from "./TodoItem.module.css"

const Todo: React.FC<{ text: string }> = (props) => {
    return (
        <li className={c.item} >{props.text}</li>
    )
}

export default Todo