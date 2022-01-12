import React, {Component} from "react";

export default class TaskIndex extends Component {
    constructor(props) {
        super (props)
        this.state = {
            task:'',
            tasks: [],
            completed: false,
        }
    }

    handelChange = (event) => {
        this.setState({
            task: event.target.value,
        })
    }

    handelSubmit = (event) => {
        event.preventDefault();
         if (this.state.task === '') {
             console.log('wrong')
         }else {
        this.setState({
            tasks: [...this.state.tasks, this.state.task],
            task: '',
        })
        }
    }

    handelComplete = (event) => {
        event.preventDefault();
        this.setState({
            completed: true,
        }) .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <br/>
                <form onSubmit={this.handelSubmit}>
                    <label>
                        Task:
                        <input type='text' value={this.state.task} onChange={this.handelChange}/>
                    </label>
                    <br/>
                    <label>
                        completed:
                        <input type='checkbox' value={this.state.completed} onChange={this.handelCheck} />
                    </label>
                    <br />
                    <input type='submit' value='Submit' />
                </form>
                <ul>
                    {this.state.tasks.map((task,index) =>
                    <li key={index}>
                        {task}
                        <input type='checkbox' value={this.state.completed} onChange={this.handelCheck}/>
                    </li>
                    )}
                </ul>

            </div>
        )
    }
}