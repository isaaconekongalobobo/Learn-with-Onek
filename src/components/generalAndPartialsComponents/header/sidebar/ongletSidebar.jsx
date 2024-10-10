/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const OngletSidebar = ({url, title}) => {
    return (
        <>
            <div className="p-4 hover:bg-slate-200">
                <NavLink to={url} >
                    <p className="text-2xl">{title}</p>
                </NavLink>
            </div>
        </>
    );
}

export default OngletSidebar;
