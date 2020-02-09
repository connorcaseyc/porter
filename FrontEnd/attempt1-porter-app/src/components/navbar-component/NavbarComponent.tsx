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
    NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';

export const NavbarComponent = (props:any) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Porter</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {/* <NavItem>
                            <Link to='/login'>Login</Link>
                        </NavItem> */}
                        <NavItem>
                            <NavLink href="https://twitter.com">Twitter</NavLink>
                        </NavItem>
                        <UncontrolledDropdown>
                            <DropdownToggle nav caret>
                                Routes
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <Link to='/'>Login</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to='/first'>First Component</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to='/second'>Second Component</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to='/props'>Props Component</Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>This is Porter</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}
