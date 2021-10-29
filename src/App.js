import React, { useState } from "react"
import Form from "./Form"
import List from "./List"
import { nanoid } from 'nanoid'

const App = () => {
    const [todos, setTodos] = useState([])

    // データ追加処理はAppで行うと綺麗
    const addTodo = (value) => {
        setTodos([
            // "..."：配列を展開する
            ...todos,
            {
                content: value,
                id: nanoid()
            }
        ])
    }

    return (
        <>
            <h1>Todo App</h1>
            <Form addTodo={addTodo} />
            <List todos={todos} />
        </>
    )
}

export default App
