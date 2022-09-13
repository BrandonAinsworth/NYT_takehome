import React from "react";
import './Header.css'
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = ({setStories}) => {


return (
  <>
  <Link to='/'>
  <h1 className="header">NYT Top Stories</h1>
  </Link>
  <Nav setStories={setStories}/>
  </>
)

}

export default Header;