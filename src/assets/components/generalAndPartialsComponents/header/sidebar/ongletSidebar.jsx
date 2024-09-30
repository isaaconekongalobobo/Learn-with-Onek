/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const OngletSidebar = ({url, title}) => {
    return (
        <>
            <div>
                <NavLink to={url} > {title} </NavLink>
            </div>
        </>
    );
}

export default OngletSidebar;
