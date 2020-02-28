import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Header from "./header";
import Footer from './footer';
import "../styles/layout.css"
import layoutStyles from '../styles/layout.module.scss';



const Layout = ({next, previous, children}) => {
  const {title, contact} = useSiteMetadata();

  return (
    <div className={layoutStyles.container}>
      <Header siteTitle={title} siteContact={contact}/>
        {children}
      <Footer next={next} previous={previous}/>
    </div>
  )
}

export default Layout;
