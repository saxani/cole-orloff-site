import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import layoutStyles from '../styles/layout.module.scss';
import footerStyles from '../styles/footer.module.scss';

const Footer = () => {
  return(
  <footer className={`${layoutStyles.height1} ${layoutStyles.width8} ${layoutStyles.flexRow}`}>
    <div className={`${layoutStyles.width2} ${footerStyles.buttonWrapper}`}>
      <div className={`${footerStyles.button} ${layoutStyles.borderRight} ${layoutStyles.width1}`}>
        <FontAwesomeIcon icon={faChevronUp} className={footerStyles.arrow}/>
      </div>
      <div className={`${footerStyles.button} ${layoutStyles.borderRight} ${layoutStyles.width1}`}>
        <FontAwesomeIcon icon={faChevronDown} className={footerStyles.arrow}/>
      </div>
    </div>
    <div className={`${layoutStyles.width6}`}>
    </div>
  </footer>
)}

export default Footer;
