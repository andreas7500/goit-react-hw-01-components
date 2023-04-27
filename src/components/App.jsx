import React from 'react';
import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import statisticData from './Statistics/statistic-data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import { TransactionHistory } from './History/TransactionHistory';
import transactions from './History/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
