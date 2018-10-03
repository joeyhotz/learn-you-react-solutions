import React from 'react';
import PropTypes from 'prop-types';

export default class TodoBox extends React.Component {
    render() {
        return (
            <div className="todoBox">
                <h1>Todos</h1>
                <TodoList />
                <TodoForm />
            </div>
        )
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <div className="todoList">
                <table style={{border: "2px solid black;"}}>
                    <tbody>
                        <Todo title="Shopping">Milk</Todo>
                        <Todo title="Hair cut">13:00</Todo>
                        <Todo title="Learn React">15:00</Todo>
                    </tbody>
                </table>
            </div>
        );
    }
}

class Todo extends React.Component {
    render() {
        Todo.propTypes = {
            title: PropTypes.string.isRequired,
            children: PropTypes.string.isRequired
        };

        const todoStyle = { border : '1px solid black;' }
    
        return (
            <tr>
                <td style={todoStyle}>{this.props.title}</td>
                <td style={todoStyle}>{this.props.children}</td>
            </tr>
        );
    }
}

class TodoForm extends React.Component {
    render() {
        return(
            <div className="todoForm">
            I am a TodoForm.
            </div>
        );
    }
}