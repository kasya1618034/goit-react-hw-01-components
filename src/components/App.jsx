import { Profile } from "./profile/Profile.jsx";
import { Statistics } from "./statistics/Statistics.jsx";
import { FriendList } from "./friend_list/FriendList.jsx";
import { TransactionHistory } from "./transaction_history/TransactionHistory.jsx";

import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory
        items={transactions}
      />
    </div>
  );
};
