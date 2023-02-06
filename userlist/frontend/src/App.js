import React from 'react';
//import './App.css';
//import axios from 'axios'
import SomeUserList from './components/Someusers.js'
import ProjectList from './components/Project.js'
import TodoList from './components/Todo.js'
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom'

const NotFound404 = ({ location }) => {
    return (
        <div>
            <h1>Страница по адресу '{location.pathname}' не найдена</h1>
        </div>
    )
}

class App extends React.Component {

    constructor(props) {
        super(props)
        const someuser1 = {first_name: 'First', last_name: 'Last', username: 'User', email: 'somemail@somecom.ru'}
        const someusers = [someuser1]

        const project1 = {prj_name: 'One', prj_link: 'Link', prj_users: 'SomeUser'}
        const projects = [project1]

        const todo1 = {todo_project: '1',todo_text: '1', todo_create: '1',todo_update: '1',todo_author: '1',todo_deleted: 'False'}
        const todo = [todo1]
        this.state = {
            'someusers': someusers,
            'projects': projects,
            'todo': todo
            }
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>SomeUsers</Link>
                        </li>
                        <li>
                            <Link to='/projects'>Projects</Link>
                        </li>
                        <li>
                            <Link to='/todo'>ToDo</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path='/' component={() => <SomeUserList items={this.state.someusers} />} />
                    <Redirect from='/someusers' to='/' />
                    <Route exact path='/projects' component={() => <ProjectList items={this.state.projects} />} />
                    <Route exact path='/todo' component={() => <TodoList items={this.state.todo} />} />
                    <Route component={NotFound404} />
                </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
export default App;