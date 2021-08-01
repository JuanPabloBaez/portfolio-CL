import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return(
        <div className="nav-bar">    
            <Link to="/" className="logo">CARLOS LERTORA SÁEZ</Link>
            <div className="link-panel">
                <Link to="/documental">CINE_DOCUMENTAL /</Link>
                <Link to="/video">VIDEO /</Link>
                <Link to="/fotografia">FOTOGRAFIA /</Link>
                <Link to="/grafica">GRÁFICA&COLLAGE /</Link>
                <Link to="/sonoro">ARTE_SONORO /</Link>
                <Link to="/talleres">TALLERES</Link>
            </div>
        </div>
    )
}

export default Nav;