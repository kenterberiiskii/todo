import React from 'react'

const TodoItem = ({item, deleteTodo}) => {
    return (
        <tr>
            <td>
                {item.todo_project}
            </td>
            <td>
                {item.todo_text}
            </td>
            <td>
                {item.todo_create}
            </td>
            <td>
                {item.todo_update}
            </td>
            <td>
                {item.todo_author}
            </td>
            <td>
                {item.todo_deleted}
            </td>
            <td><button onClick={()=>deleteTodo(item.id)}
type='button'>Delete</button></td>
        </tr>
    )
}

const TodoList = ({items, deleteTodo}) => {
    return (
        <table>
            <tr>
                <th>todo_project</th>
                <th>todo_text</th>
                <th>todo_create</th>
                <th>todo_update</th>
                <th>todo_author</th>
                <th>todo_deleted</th>
            </tr>
            {items.map((item) => <TodoItem item={item} deleteTodo={deleteTodo}
/>)}
        </table>
    )
}
export default TodoList