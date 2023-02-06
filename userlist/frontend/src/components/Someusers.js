import React from 'react'

const SomeUserItem = ({item}) => {
    return (
        <tr>
            <td>
                {item.first_name}
            </td>
            <td>
                {item.last_name}
            </td>
            <td>
                {item.username}
            </td>
            <td>
                {item.email}
            </td>
        </tr>
    )
}

const SomeUserList = ({items}) => {
    return (
        <table>
            <th>
                First name
            </th>
            <th>
                Last Name
            </th>
            <th>
                User Name
            </th>
            <th>
                User Email
            </th>
            {items.map((item) => <SomeUserItem item={item} />)}
        </table>
)
}
export default SomeUserList