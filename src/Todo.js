import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputTodo:'',
            data:[]
        }
    }
    
    render() {
        return (
            <div>
                <h1>Todo Test</h1>
                <form
                    onSubmit={(e)=> {
                        e.preventDefault();
                        this.setState({
                            inputTodo: '',
                            data: [...this.state.data, this.state.inputTodo],
                        })
                    }}
                >
                    <input
                        type='text'
                        name='inputTodo'
                        value={this.state.inputTodo}
                        onChange={(e) => {
                            this.setState({
                                inputTodo: e.target.value
                            });
                        }}
                    />
                </form>
                <ol>
                    {this.state.data.map((todo, index)=> {
                        return <li key={index}>{todo}</li>
                    })}
                </ol>
            </div>
        )
    }
}
