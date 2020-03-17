import React from "react";

import layoutStyles from '../../styles/layout.module.scss';
import aboutStyles from '../../styles/about.module.scss';

const AboutGallery = () => {
 
  return (
      <div className = {`${layoutStyles.width4} ${layoutStyles.borderBottom} ${layoutStyles.height6} ${aboutStyles.profileContent}`}>
         Photos
      </div>
  );
}

export default AboutGallery;
