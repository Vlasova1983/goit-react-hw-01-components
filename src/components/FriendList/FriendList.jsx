import PropTypes from "prop-types";
import styles from '../FriendList/FriendList.module.css';
import {Friend} from '../Friend/Friend';

export const FriendList = ({friends}) => {
    return (
        <ul className={styles.friend_list}>
            {friends.map((friend) => {
             return <Friend friend={friend}/>
            })}               
        </ul>
    );
};

FriendList.propTypes = {       
    friends: PropTypes.arrayOf()
}

