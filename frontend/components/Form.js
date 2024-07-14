import React from 'react'

export default class Form extends React.Component {
state = {
  name: '',
};

onSubmit = evt => {
  evt.preventDefault()
  const { addTodo } = this.props;
  addTodo(this.state.name);
  this.setState({
    ...this.state,
    name: '',
    });
  
};

onChange = evt => {
  const { value } = evt.target 
  this.setState({
  ...this.state,
  name: value,
  })

}

  render() {
    const { addTodo } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <input  type="text" value={this.state.name} onChange={this.onChange}></input>
        <input  type="submit" />
      </form>
    )
  }
}
