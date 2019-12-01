import * as React from "react";
import { NavLink } from "react-router-dom";

const Banner=(props)=>{
    return (
        <div>   
            <ul>
                <li>
                    <NavLink to="/">首页</NavLink>
                </li>
                <li>
                    <NavLink to="/demo">demo</NavLink>
                </li>
                <li>
                    <NavLink to="/login">退出</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Banner