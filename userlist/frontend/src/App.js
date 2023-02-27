import React from 'react';
//import './App.css';
import SomeUserList from './components/Someusers.js'
import ProjectList from './components/Project.js'
import TodoList from './components/Todo.js'
import LoginForm from './components/Auth.js'
import ProjectForm from './components/ProjectForm.js'
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom'

import axios from 'axios'
import Cookies from 'universal-cookie';

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
            'todo': todo,
            'token': ''
            }
    }

    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, ()=>this.load_data())
    }

    is_authenticated() {
        return this.state.token != ''
    }

    logout() {
        this.set_token('')
    }

    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, ()=>this.load_data())
    }

    get_token(username, password) {
        axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username, password: password})
        .then(response => {
            this.set_token(response.data['token'])
        }).catch(error => alert('Неверный логин или пароль'))
    }

    get_headers() {
        let headers = {
            'Content-Type': 'application/json'
        }
        if (this.is_authenticated())
        {
            headers['Authorization'] = 'Token ' + this.state.token
        }
        return headers
    }

    componentDidMount() {
        this.get_token_from_storage()
    }

    deleteProject(id) {
        const headers = this.get_headers()
        axios.delete(`http://127.0.0.1:8000/api/projects/${id}`, {headers, headers})
        .then(response => {
            this.setState({projects: this.state.projects.filter((item)=>item.id !==id)})
        }).catch(error => console.log(error))
    }

    deleteTodo(id) {
        const headers = this.get_headers()
        axios.delete(`http://127.0.0.1:8000/api/todo/${id}`, {headers, headers})
        .then(response => {
            this.setState({todo: this.state.todo.filter((item)=>item.id !==id)})
        }).catch(error => console.log(error))
    }

    createProject(prj_name, prj_link) {
        const headers = this.get_headers()
        const data = {prj_name: prj_name, prj_link: prj_link}
        axios.post(`http://127.0.0.1:8000/api/projects/`, data, {headers, headers})
        .then(response => {
        let new_project = response.data
        const prj_name = this.state.prj_name.filter((item) => item.id ===
        new_project.prj_name)[0]
        new_project.prj_name = prj_name
        this.setState({projects: [...this.state.projects, new_project.prj_name]})
        }).catch(error => console.log(error))
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
                        <li>
                            {this.is_authenticated() ? <button
                            onClick={()=>this.logout()}>Logout</button> : <Link to='/login'>Login</Link>}
                        </li>

                    </ul>
                </nav>
                <Switch>
                    <Route exact path='/' component={() => <SomeUserList items={this.state.someusers} />} />
                    <Redirect from='/someusers' to='/' />
                    <Route exact path='/login' component={() => <LoginForm
                    get_token={(username, password) => this.get_token(username, password)} />} />
                    <Route component={NotFound404} />
                    <Route exact path='/projects' component={() => <ProjectList items={this.state.projects} deleteProject={(id)=>this.deleteProject(id)} />} />
                    <Route exact path='/todo' component={() => <TodoList items={this.state.todo} deleteTodo={(id)=>this.deleteTodo(id)} />} />
                    <Route exact path='/projects/create' component={() => <ProjectForm createProject={(prj_name, prj_link) => this.createProject(prj_name, prj_link)} />} />
                </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
export default App;