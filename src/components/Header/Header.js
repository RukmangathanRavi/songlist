import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.css'

class Header extends Component {
    render() {
        return (
            <div className={classes.displ}>
                <div>
                    <Link to="/songs">Songs</Link>
                </div>
                <div>
                    <Link id={classes.he} to="/">Home</Link>
                    <Link id={classes.he} to="/login">Login</Link>
                </div>
            </div>
        )
    }
}

export default Header