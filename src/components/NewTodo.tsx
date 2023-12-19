import React, { useRef } from "react"
import c from  './NewTodo.module.css'

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {

    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        const enteredText = inputRef.current!.value

        if (enteredText?.trim().length === 0) {
            return;
        }

        props.onAddTodo(enteredText)

    }

    return (
        <form className={c.form} onSubmit={handleSubmit} >

            <label htmlFor="text">Text</label>
            <input ref={inputRef} type="text" name="" id="text" />

            <button >Add Todo</button>

        </form>
    )
}

export default NewTodo