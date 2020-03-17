import React from "react";

import layoutStyles from '../../styles/layout.module.scss';
import menuStyles from '../../styles/menu.module.scss';

const menuItems = ['Profile', 'Photography', 'Clients', 'Resume'];

const BottomMenu = () => {
 
  return (
      <div className = {`${layoutStyles.height1} ${layoutStyles.width8}`}>
          <ul className={`${menuStyles.menu}`}>
            {menuItems.map(item => (
                    <li key={item} className={`${layoutStyles.width2} ${layoutStyles.borderRight} ${menuStyles.height100} ${menuStyles.floatLeft} ${menuStyles.borderRightNotLast}`}>
                        <a className = {`${menuStyles.link} ${menuStyles.hoverPointer}`}>
                            {item}
                        </a>  
                    </li>
                ))}
            </ul>
      </div>
  );
}

export default BottomMenu;
