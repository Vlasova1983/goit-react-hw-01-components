import PropTypes from "prop-types";
import styles from '../Friend/Friend.module.css';


export const Friend = ({friend}) => {               
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
           
};

const randomColor = (item) => {
    return item ? 'red': 'green'
}


Friend.propTypes = {       
    friend: PropTypes.shape({            
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool
    })    
}
