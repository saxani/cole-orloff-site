import React from "react";

import layoutStyles from '../../styles/layout.module.scss';
import aboutStyles from '../../styles/about.module.scss';

const Profile = () => {
 
  return (
      <div className = {`${layoutStyles.width4} ${layoutStyles.borderRight} ${layoutStyles.borderBottom} ${layoutStyles.height6} ${aboutStyles.profileContent}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
  );
}

export default Profile;
