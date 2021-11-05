import React from 'react';

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

import './App.css';

function App() {
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
      <ColorPicker />
    </div>
  );
}

export default App;
