import { Profile } from ".profile/Profile";
import { Statistics } from ".statistics/Statistics";
import { FriendList } from ".friend_list/FriendList";
import { TransactionHistory } from ".transaction_history/TransactionHistory";

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </div>
  );
};
