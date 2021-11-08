import React, { Component } from 'react';

import Profile from './components/social-profile/profile';
import user from './data/user.json';

import Statistics from './components/statistics/statistics';
import statisticalData from './data/statistical-data.json';

import FriendList from './components/friends/friends';
import friends from './data/friends.json';

import TransactionHistory from './components/transaction-history/transactions';
import transactions from './data/transactions.json';

import Counter from './components/Counter/Counter';
import Dropdown from './components/Dropdown/Dropdown';
import ColorPicker from './components/ColorPicker/ColorPicker';

import TodoList from './components/TodoList';
import initialTodos from './components/TodoList/todos.json';

import Form from './components/Form/Form';

import './App.css';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

    return (
      <div className="App">
        <Dropdown />
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
        <Counter initialValue={10} />
        <ColorPicker options={colorPickerOptions} />
        <div className="todoContainer">
          <span>To do list</span>
          <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />

          <span className="TodoList__count">
            Total amount todo: {totalTodoCount}
          </span>
          <span className="TodoList__count">
            Amount done: {completedTodoCount}
          </span>
        </div>
        <Form onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}

export default App;
