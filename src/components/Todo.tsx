import c from "./TodoItem.module.css"

const Todo: React.FC<{ text: string , id :string, removeTodoHandler:(id:string)=> void }> = (props) => {


    return (
        <li onClick={ props.removeTodoHandler.bind(null , props.id)} className={c.item} >{props.text}</li>
    )
}

export default Todo