import PropTypes from "prop-types";
import styles from '../Profile/Profile.module.css';

console.log(styles);
export const Profile = ({username,tag,location,avatar,stats}) => {
    return (
        <div class="profile">
        <div class="description">
          <img
            src={avatar}
            alt="User avatar"
            class="avatar"
          />
          <p class="name">{username}</p>
          <p class="tag">{tag}</p>
          <p class="location">{location}</p>
        </div>
      
        <ul class="stats">
          <li>
            <span class="label">{stats.followers}</span>
            <span class="quantity">{stats.amount_followers}</span>
          </li>
          <li>
            <span class="label">{stats.views}</span>
            <span class="quantity">{stats.amount_views}</span>
          </li>
          <li>
            <span class="label">{stats.likes}</span>
            <span class="quantity">{stats.amount_likes}</span>
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