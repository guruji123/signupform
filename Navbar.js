import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
class Navbar extends Component {
    render () {
        return (
            <ul className="navbar-nav">
            <li className="nav-item"><Link to="/login">LogIn</Link></li>
            </ul>

        )
    }
     
}

export default withRouter(Navbar);