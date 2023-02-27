import React from 'react'

class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {prj_name: '', prj_link: ''}
    }
    handleChange(event)
    {
        this.setState(
        {
            [event.target.name]: event.target.value
        }
        );
    }
    handleSubmit(event) {
        this.props.createBook(this.state.name, this.state.author)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={(event)=> this.handleSubmit(event)}>
                <div className="form-group">
                    <label for="login">name</label>
                    <input type="text" className="form-control" name="prj_name" value={this.state.prj_name} onChange={(event)=>this.handleChange(event)} />
                </div>
                <div className="form-group">
                    <label for="prj_link">author</label>
                    <input type="text" className="form-control" name="prj_link" value={this.state.prj_link} onChange={(event)=>this.handleChange(event)} />
                </div>
                <input type="submit" className="btn btn-primary" value="Save" />
            </form>
        );
    }
}
export default ProjectForm