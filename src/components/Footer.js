import React from "react";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="container">
                <ul className=" pull-left navbar-link footer-nav">
                    <li><a href="/"> Home </a>
                    <a href="/contact"> Contact us </a>
                    <a href="/faq"> FAQ </a></li>
                </ul>
                <ul className=" pull-right navbar-link footer-nav">
                    <li>&copy; 2021 FarmHub</li>
                </ul>
            </div>
        </div>

    );
}
export default Footer;