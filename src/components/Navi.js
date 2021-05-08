import React, { useState } from 'react';
import {  
    Link
} from 'react-router-dom';
import "./navi.css";

function Navi(props) {
    const [isActive, setIsActive] = useState(false);

    let directories;

    if (props.router) {
        directories = props.dirs.map(dir => {
            const newClassList = (dir.icon).concat(" fa-2x icon-nav");
            
            return (
            <li>
                <Link to={dir.dir}>
                    <span className="icon"><i className={newClassList}></i></span>
                    <span className="icon-title">{dir.name}</span>
                </Link>
            </li>);
        });
    } else {
        directories = props.dirs.map(dir => {
            const newClassList = (dir.icon).concat(" fa-2x icon-nav");
            
            return (
            <li>
                <a href={dir.dir}>
                    <span className="icon"><i className={newClassList}></i></span>
                    <span className="icon-title">{dir.name}</span>
                </a>
            </li>);
        });
    }

    return(
        <navbar id="navbar">
            <div className={isActive ? "active" : ""} id="hamburger" onClick={() => setIsActive(!isActive)}>
                <div id="top"></div>
                <div id="middle"></div>
                <div id="bottom"></div>
            </div>
            <div className={isActive ? "active" : ""} id="box">
                <ul id="nav">
                    {directories}
                </ul>
            </div>
        </navbar>);
}

export default Navi;