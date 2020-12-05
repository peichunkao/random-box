import React, { Component } from 'react'

export default class NameButton extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);

        this.state = {
             name:'Steven'
        }
    }

    handleClick(e) {
        this.setState((prevState, props) => {
            prevState.name =  prevState.name.toUpperCase();
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    UPPERCASE
                </button>
                <h3>{this.state.name}</h3>
            </div>
        )
    }
}
