import React from 'react';
import './index.css';
import{
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class Navigation extends React.Component{
  render(){
    return (
      <>
      <div id="nav">
        <p className="visible_color">Checkpoint 3</p>
          <Nav>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/categories">Categories</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/details">Details</NavLink>
          </NavItem>
        </Nav>
        <hr />
      </div>
    </>
    );
  }
}export default Navigation;