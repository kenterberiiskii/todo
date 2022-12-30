import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import SomeUserList from './components/Someusers.js'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'someusers': []
            }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/somusers/')
        .then(response => {
            const someusers = response.data
            this.setState(
                    {
                        'someusers': someusers
                    }
            )
        }).catch(error => console.log(error))
    }

    render () {
        return (
        <div>
            Список юзеров
            <SomeUserList someusers={this.state.someusers} />
        </div>
        )
    }
}
export default App;