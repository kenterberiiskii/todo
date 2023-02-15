import React from 'react'

const ProjectItem = ({item}) => {
    return (
        <tr>
            <td>
                {item.prj_name}
            </td>
            <td>
                {item.prj_link}
            </td>
            <td>
                {item.prj_users}
            </td>
        </tr>
    )
}

const ProjectList = ({items}) => {
    return (
        <table>
            <tr>
                <th>prj_name</th>
                <th>prj_link</th>
                <th>prj_users</th>
            </tr>
            {items.map((item) => <ProjectItem item={item} />)}
        </table>
    )
}
export default ProjectList