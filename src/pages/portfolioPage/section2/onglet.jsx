/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Onglet = ({to, text}) => {
    return (
        <NavLink to={to}>
            <span className="p-2 px-4 rounded-full text-slate-800 font-medium hover:bg-slate-800 hover:text-white">{text}</span>
        </NavLink>
    );
}

export default Onglet;
