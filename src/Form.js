import React, { useState } from "react";

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        // ブラウザリロードしない
        e.preventDefault()
        addTodo(value)
    }

    // onSubmit : ブラウザリロードが走る
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => {
                setValue(e.target.value)
            }} />
        </form>
    )
}

export default Form
