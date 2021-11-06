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
    todos: [
      { id: 'id-1', text: 'Выучить основы React', completed: true },
      { id: 'id-2', text: 'Разобраться с React Router', completed: false },
      { id: 'id-3', text: 'Пережить Redux', completed: false },
    ],
  };
  render() {
    const { todos } = this.state;
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
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default App;
