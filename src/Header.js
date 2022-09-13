import React from "react";
import './Header.css'
import Nav from "./Nav";
const Header = ({setStories}) => {


return (
  <>
  <h1 className="header">NYT Top Stories</h1>
  <Nav setStories={setStories}/>
  </>
)

}

export default Header;