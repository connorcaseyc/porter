import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Form,
  Input,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { history } from '../history/history';

export const NavbarComponent = (props:any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const logout = () =>{
    localStorage.clear();
    history.push("/login");
   }
  return (
    <div>
      <Navbar color="warning" light expand="md">
        {/* logo here */}
        <NavbarBrand href="/">Porter</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
        
            <NavItem>
              <NavLink href="https://Twitter.com">Twitter</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Links
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to='/profile'>Your Profile</Link>
                </DropdownItem>
           
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Form>
              <Input type="text" name="username" placeholder="search users..."/>
          </Form>
          <NavbarText> Find Your Friends</NavbarText>
          <Button onClick={logout}>logout</Button>
        </Collapse>
      </Navbar>
    </div>
  );
}
