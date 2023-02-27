import React from 'react'

const ProjectItem = ({item, deleteProject}) => {
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
            <td><button onClick={()=>deleteProject(item.id)}
type='button'>Delete</button></td>
        </tr>
    )
}

const ProjectList = ({items, deleteProject}) => {
    return (
    <div>
        <table>
            <tr>
                <th>prj_name</th>
                <th>prj_link</th>
                <th>prj_users</th>
                <th></th>
            </tr>
            {items.map((item) => <ProjectItem item={item} deleteProject={deleteProject}
/>)}

        </table>
        <Link to='/projects/create'>Create</Link>
    </div>
    )
}
export default ProjectList