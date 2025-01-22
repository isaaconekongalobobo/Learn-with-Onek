/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const OngletSidebar = ({url, title}) => {
    return (
        <NavLink to={url} >
            <p className="text-xl tablet:text-2xl text-white">{title}</p>
        </NavLink>
    );
}

export default OngletSidebar;
