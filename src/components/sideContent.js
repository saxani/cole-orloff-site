import React, { Component } from "react";
import { Link } from "gatsby";

import layoutStyles from '../styles/layout.module.scss';
import menuStyles from '../styles/menu.module.scss';

class SideContent extends Component {
    constructor(props) {
      super(props);

      this.data = props;

      this.state = {text: this.data.title};
      this.link = "/";
      this.hover = "Back";
  
      this.mouseEnter = this.mouseEnter.bind(this);
      this.mouseLeave = this.mouseLeave.bind(this);
    }

    mouseEnter(){
        this.setState({
          text: this.hover
        });
      }
    
      mouseLeave(){
        this.setState({
          text: this.data.title
        });
      }
    
  
    render() {
      return (
        <div className={`${layoutStyles.width2} ${layoutStyles.height6}`}>
            <ul className={`${menuStyles.menu}`}>
                <li className={`${menuStyles.oneSixth} ${layoutStyles.borderRight} ${layoutStyles.borderBottom}`}>
                    <Link to="/" className={menuStyles.link}
                        onMouseEnter={this.mouseEnter}
                        onMouseLeave={this.mouseLeave}>
                        {this.state.text}
                    </Link>
                </li>
                <div className={`${menuStyles.fiveSixth} ${layoutStyles.borderRight} ${layoutStyles.borderBottom}`}>
                    <div className={menuStyles.content} dangerouslySetInnerHTML={{ __html: this.data.content }} />
                </div>
            </ul>
        </div>
      )
    }
  }
  
  export default SideContent;