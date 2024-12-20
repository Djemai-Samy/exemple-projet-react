import { useContext } from "react";
import { useState } from "react"
import { TodosContext } from "./TodoList"
export default function TodoForm() {

    const [todoInput, setTodoInput] = useState('');
    const [todoError, setTodoError] = useState('');

    const { addTodo } = useContext(TodosContext)
    function handleTodoInput(e) {
        setTodoInput(e.target.value)
    }

    async function submit() {
        const resultat = await addTodo(todoInput)
    }

    return (
        <div>
            <input type="text" value={todoInput} onChange={handleTodoInput} />
            <p>{todoError}</p>
            <button onClick={submit} >Ajouter</button>
        </div>
    )
}
