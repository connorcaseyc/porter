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
    sessionStorage.removeItem("user");
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
          <Button onClick={logout}>logout</Button>
            <NavItem>
              <NavLink href="https://Twitter.com">Twitter</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Links
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to='/chucknorris'>ChuckNorris</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/pokemon'>Pokemon</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/clicker'>Clicker</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/starwars'>StarWars</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/tic-tac-toe'>Tic-Tac-Toe</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Form>
              <Input type="text" name="username" placeholder="search users..."/>
          </Form>
          <NavbarText> Find Your Friends</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
