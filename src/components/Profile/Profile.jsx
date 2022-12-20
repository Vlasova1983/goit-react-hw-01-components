import PropTypes from "prop-types";
import styles from '../Profile/Profile.module.css';

console.log(styles);
export const Profile = ({username,tag,location,avatar,stats}) => {
  console.log(avatar);
    return (
        <div class={styles.profile}>
        <div class={styles.description}>
          <img
            src={avatar}
            alt="User avatar"
            class={styles.avatar}
          />
          <p className={styles.name}>{username}</p>
          <p class={styles.tag}>{tag}</p>
          <p class={styles.location}>{location}</p>
        </div>      
        <ul class={styles.stats}>
          <li class={styles.stat}>
            <span class={styles.label}>{stats.followers}</span>
            <span class={styles.quantity}>{stats.amount_followers}</span>
          </li>
          <li class={styles.stat}>
            <span class={styles.label}>{stats.views}</span>
            <span class={styles.quantity}>{stats.amount_views}</span>
          </li>
          <li class={styles.stat}>
            <span class={styles.label}>{stats.likes}</span>
            <span class={styles.quantity}>{stats.amount_likes}</span>
          </li>
        </ul>
      </div>
    );
  };


Profile.propTypes = {    // 
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  friends: PropTypes.arrayOf(
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