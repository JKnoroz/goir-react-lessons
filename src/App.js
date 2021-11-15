import React, { Component } from 'react';
import shortid from 'shortid';

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
import TodoEditor from './components/TodoList/TodoEditor';
import Filter from './components/TodoList/Filter';

import Form from './components/Form/Form';

import Modal from './components/Modal';

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
    filter: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  getCompletedTodoCount = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      this.setState({ todos: todos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  render() {
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.getCompletedTodoCount();
    const visibleTodos = this.getVisibleTodos();

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
          <TodoEditor onSubmit={this.addTodo} />
          <Filter value={filter} onChange={this.changeFilter} />
          <TodoList
            todos={visibleTodos}
            onDeleteTodo={this.deleteTodo}
            onToggleCompleted={this.toggleCompleted}
          />

          <span className="TodoList__count">
            Total amount todo: {totalTodoCount}
          </span>
          <span className="TodoList__count">
            Amount done: {completedTodoCount}
          </span>
        </div>
        <Form onSubmit={this.formSubmitHandler} />
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h2>Modal window</h2>
            <p>laalalala</p>
            <button type="button" onClick={this.toggleModal}>
              Close modal
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
