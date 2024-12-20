import { useState } from "react";
import { createContext } from "react"
import TodoForm from "./TodoForm";
import { identifier } from "../../../libs/identifier"
export const TodosContext = createContext();

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  async function addTodo(todo) {
    if (todo === "") {
      return {
        success: false,
        message: "TODO_INVALID"
      }
    }
    //Créer la todo
    const newTodo = {
      id: identifier.createID(),
      content: todo,
      date: new Date(),
      isFinished: false
    }

    // Ajouter la todo a la fin
    const todosJSON = localStorage.getItem('todos');
    const todosDB = todosJSON ? JSON.parse(todosJSON) : [];
    todosDB.push(newTodo);

    // Enregistrer la liste
    localStorage.setItem('todos', JSON.stringify(todosDB));

    setTodos(todosDB);
    return {
      success: true,
      message: "TODO_CREATED"
    }

  }
  return (
    <TodosContext.Provider value={{ addTodo, todos }}>
      <TodoForm />
      {
        todos.map((todo) => {
          return (<div key={todo.id}>
            <h3>{todo.content}</h3>
          </div>)
        })
      }
    </TodosContext.Provider>
  )
}
