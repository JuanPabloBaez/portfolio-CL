import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return(
        <div className="nav-bar">    
            <Link to="/">CARLOS LERTORA SÁEZ</Link>
            <div className="link-panel">
                <Link to="/documental">CINE DOCUMENTAL</Link>
                <Link to="/video">VIDEO</Link>
                <Link to="/fotografia">FOTOGRAFIA</Link>
                <Link to="/grafica">GRÁFICA&COLLAGE</Link>
                <Link to="/sonoro">ARTE SONORO</Link>
                <Link to="/talleres">TALLERES</Link>
            </div>
        </div>
    )
}

export default Nav;