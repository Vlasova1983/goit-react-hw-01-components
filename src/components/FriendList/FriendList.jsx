import PropTypes from "prop-types";
import './FriendList';


export const FriendList = ({friends}) => {
    return (
        <ul class="friend-list">
            {friends.map((friend)=>{                
               return (
                    <li class="item" key={friend}>
                        <div class="status"
                            style={{
                                height:'6px',
                                width:'6px',
                                borderRadius:'50%',           
                                backgroundColor: randomColor(friend.isOnline)  
                            }}
                        ></div>
                        <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
                        <p class="name">{friend.name}</p>
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

