import React from "react";
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';

import '../css/navigation.css'

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div id="header">
                        <div id="top-logo" className="logo">
                            <p>Questioner</p>
                        </div>
                        <nav>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/login" className="focus">Login</a></li>
                                <li><a href="/signup" className="focus">Signup</a></li>

                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}

export default Navigation;