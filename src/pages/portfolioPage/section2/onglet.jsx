/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Onglet = ({to, text}) => {
    return (
        <NavLink to={to}>
            <span className="p-2 rounded-full text-slate-800 font-medium">{text}</span>
        </NavLink>
    );
}

export default Onglet;
