export const FriendList = ({friends}) => {
    return (
        <ul class="friend-list">
            {friends.map((friend)=>{
               return (
                    <li class="item" key={friend}>
                        <span class="status"></span>
                        <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
                        <p class="name">{friend.name}</p>
                    </li> 
                )              
            })}
            
        </ul>
    );
};