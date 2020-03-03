import React, { Component } from "react";
import { Link } from "gatsby";

import layoutStyles from '../styles/layout.module.scss';
import menuStyles from '../styles/menu.module.scss';

class Menu extends Component {
    constructor(props) {
      super(props);

      this.data = props.data;

      this.handlePrevious = this.handlePrevious.bind(this);
      this.handleNext = this.handleNext.bind(this);
    }

    handlePrevious(e){
        console.log('go up');
    }

    handleNext(e){
        console.log('go down');
    }
   
  
    render() {

      return (
        <div className={`${layoutStyles.width2} ${layoutStyles.height6} ${menuStyles.menuWrapper} menu-wrapper`}>
            <ul className={`${menuStyles.menu} menu`}>
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