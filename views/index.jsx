import React from 'react';

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
                    </tbody>
                </table>
            </div>
        );
    }
}

class Todo extends React.Component {
    render() {
        const todoStyle = { 'border' : '1px solid black;' }
    
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
        )
    }
}