import PropTypes from "prop-types";
import styles from '../Profile/Profile.module.css';

export const Profile = ({username,tag,location,avatar,stats}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={styles.avatar}
        />
        <p className={styles.name}>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>      
      <ul className={styles.stats}>
        <li className={styles.stat}>
          <span>{stats.followers}</span>
          <span className={styles.quantity}>{stats.amount_followers}</span>
        </li>
        <li className={styles.stat}>
          <span>{stats.views}</span>
          <span className={styles.quantity}>{stats.amount_views}</span>
        </li>
        <li className={styles.stat}>
          <span>{stats.likes}</span>
          <span className={styles.quantity}>{stats.amount_likes}</span>
        </li>
      </ul>
    </div>
  );
  };


Profile.propTypes = {    
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({            
      followers: PropTypes.string.isRequired,
      amount_followers: PropTypes.string.isRequired,
      views: PropTypes.string.isRequired,
      amount_views: PropTypes.string.isRequired, 
      likes: PropTypes.string.isRequired,
      amount_likes: PropTypes.string.isRequired
    })
  )
}