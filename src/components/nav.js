import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return(
        <div className="nav-bar">    
            <Link to="/" className="logo">CARLOS LERTORA SÁEZ</Link>
            <div className="link-panel">
                <Link to="/documental">DOCUMENTAL & VIDEO </Link>/
                <Link to="/talleres">TALLERES </Link>/
                <Link to="/imagen">IMAGEN </Link>/
                <Link to="/sonoro">ARTE_SONORO </Link>
            </div>
        </div>
    )
}

export default Nav;