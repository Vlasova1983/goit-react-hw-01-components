import {Profile} from './Profile/Profile';
import {Statistics} from './Statistics/Statistics';
import {FriendList} from './FriendList/FriendList';
import {TransactionHistory} from './TransactionHistory/TransactionHistory';
import{ Container }  from '../components/App.styled'

import user from '../path/user';
import data from '../path/data';
import friends from '../path/friends';
import transactions from '../path/transactions';

export const App = () => {
    return (
        <Container>
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
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </Container>      
    );
  };