import React from "react";
import logo from "../images/logo.svg";

function Header() {
    return (
        <header className="header">
            <img className="logo" id="logo" src={logo} alt="around the us logo"/>
        </header>
    )
}

export default Header;