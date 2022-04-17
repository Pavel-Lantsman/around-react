import logo from "../images/logo.svg";
import React from "react";

function Header() {


    return (
        <header className="header">
            <img className="logo" id="logo" src={logo} alt="around the us logo"/>
        </header>
    )

}

export default Header;