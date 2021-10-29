import React from "react";
import Item from "./Item";

const List = ({ todos }) => {
    console.log(todos)

    return (
        <ul>
            {
                // map 使用時、複数ある場合のcomponentを見分けるユニークキーをつける
                // index には処理回数が入る。<= 非推奨
                todos.map((todo) => {
                    return (
                        <Item content={todo.content} key={todo.id} />
                    )
                })
            }
        </ul>
    )
}

export default List
