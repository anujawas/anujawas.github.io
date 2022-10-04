import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.jpg?1"
import Login from './Signin';
const Navbar=()=>{
    return(
        <div className="header">
            <nav className="navbar   navbar-site navbar-default" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button data-target=".navbar-collapse" data-toggle="collapse" className="navbar-toggle"
                            type="button">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="/" className="navbar-brand logo">
                            <img className="logo-icon" src={logo} alt="FarmHub - farmers marketplace"
                                height="50"/>
                        </a>
                    </div>
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">

                            <li><a href="/">Categories</a></li>

                            <li><Link to="/Login">Login</Link></li>
                            <li><Link to="/Signup">Signup</Link></li>

                            <li className="postadd"><Link className="btn btn-block   btn-border btn-post btn-danger"
                                    to="/post-ad">Post Free Ad</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
}
export default Navbar;