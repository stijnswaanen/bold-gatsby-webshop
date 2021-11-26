import { Link } from 'gatsby';
import React from 'react'
import logo from '../../assets/images/bold-logo.svg';

const Logo = () => {
    return (
        <Link to="/">
            <img src={logo} alt="logo" width="160" />
        </Link>
    )
}

export default Logo
