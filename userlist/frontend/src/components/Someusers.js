import React from 'react'

const SomeUserItem = ({someuser}) => {
    return (
        <tr>
            <td>
                {someuser.first_name}
            </td>
            <td>
                {someuser.last_name}
            </td>
            <td>
                {someuser.username}
            </td>
            <td>
                {someuser.email}
            </td>
        </tr>
    )
}

const SomeUserList = ({someusers}) => {
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
            {someusers.map((someuser) => <SomeUserItem someuser={someuser} />)}
        </table>
)
}
export default SomeUserList