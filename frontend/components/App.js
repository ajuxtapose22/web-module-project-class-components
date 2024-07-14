import React from 'react';
import Form from './Form';
import TodoList from './TodoList';
import idGenerator from './IdGenerator';

const initialTodos = [
  { id: idGenerator.getId(), name: 'Walk the dog', completed: false },
  { id: idGenerator.getId(), name: 'Learn React', completed: true },
  { id: idGenerator.getId(), name: 'Have fun', completed: false },
];

export default class App extends React.Component {
  state = {
    todos: initialTodos,
    showOnlyIncomplete: false,
  };

  addTodo = (name) => {
    this.setState({
      todos: this.state.todos.concat({ id: idGenerator.getId(), completed: false, name }),
    });
  };

  toggleCompletion = (id) => {
    this.setState({
      todos: this.state.todos.map((td) => {
        if (id === td.id) return { ...td, completed: !td.completed };
        return td;
      }),
    });
  };

  toggleShowTodos = () => {
    this.setState({
      showOnlyIncomplete: !this.state.showOnlyIncomplete,
    });
  };

  render() {
    const todosToShow = this.state.showOnlyIncomplete
      ? this.state.todos.filter((todo) => !todo.completed)
      : this.state.todos;

    return (
      <div>
        <TodoList todos={todosToShow} toggleCompletion={this.toggleCompletion} />
        <Form addTodo={this.addTodo} />
        <button onClick={this.toggleShowTodos}>
          {this.state.showOnlyIncomplete ? 'Show Completed' : 'Hide Completed'}
        </button>
      </div>
    );
  }
}
