import PropTypes from "prop-types";
import styles from '../FriendList/FriendList.module.css';


export const FriendList = ({friends}) => {
    return (
        <ul className={styles.friend_list}>
            {friends.map((friend)=>{                
               return (
                    <li className={styles.item} key={friend}>
                        <div 
                            style={{
                                height:'10px',
                                width:'10px',
                                borderRadius:'50%',           
                                backgroundColor: randomColor(friend.isOnline)  
                            }}
                        ></div>
                        <img className={styles.avatar} src={friend.avatar} alt="User avatar" width="48" />
                        <p>{friend.name}</p>
                    </li> 
                )              
            })}            
        </ul>
    );
};

const randomColor = (item) => {
    return item === true ? 'red': 'green'
}


FriendList.propTypes = {       
    friends: PropTypes.arrayOf(
        PropTypes.shape({            
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool
        })
    )
}

