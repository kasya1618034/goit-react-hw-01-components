import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => (
  <ul>
    <li>
      <span className="status"></span>
      <img className="avatar" src="" alt="User avatar" width="48" />
      <p className="name"></p>
    </li>
  </ul>
);

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
}

