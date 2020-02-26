import React, { Component } from "react";
import { Link } from "gatsby";

import layoutStyles from '../styles/layout.module.scss';
import menuStyles from '../styles/menu.module.scss';

class Menu extends Component {
    constructor(props) {
      super(props);

      this.data = props.data;
    }

   
  
    render() {
      return (
        <div className={`${layoutStyles.width2} ${layoutStyles.height6}`}>
            <ul className={`${menuStyles.menu}`}>
                {this.data.edges.map(document => (
                  <li key={document.node.id} className={`${menuStyles.oneSixth} ${layoutStyles.borderRight} ${layoutStyles.borderBottom}`}>
                   <Link to={document.node.fields.slug} className={menuStyles.link}>
                       {document.node.title}
                   </Link>
                 </li>
                ))}
            </ul>
        </div>
      )
    }
  }
  
  export default Menu;