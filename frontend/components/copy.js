import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    const { todos, toggleCompletion } = this.props;
    return (
      <div>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} toggleCompletion={toggleCompletion} />
        ))}
      </div>
    );
  }
}




import React from 'react';

export default class Todo extends React.Component {
  render() {
    const { id, name, completed } = this.props.todo;
    const { toggleCompletion } = this.props;  // Corrected here

    return (
      <div onClick={() => toggleCompletion(id)}>
        {name} {completed && '  \u2713'}
      </div>
    );
  }
}





import React from 'react';

export default class Form extends React.Component {
  state = {
    name: '',
  };

  onSubmit = evt => {
    evt.preventDefault();
    const { addTodo } = this.props;
    addTodo(this.state.name);
    this.setState({
      ...this.state,
      name: '',
    });
  };

  onChange = evt => {
    const { value } = evt.target;
    this.setState({
      ...this.state,
      name: value,
    });
  };

  render() {
    const { addTodo } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.name} onChange={this.onChange}></input>
        <input type="submit" />
      </form>
    );
  }
}
