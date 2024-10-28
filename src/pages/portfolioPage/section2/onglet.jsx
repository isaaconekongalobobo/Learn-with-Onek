/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Onglet = ({to, text}) => {
    return (
        <NavLink to={to}>
            <div>
                <span className="">{text}</span>
            </div>
        </NavLink>
    );
}

export default Onglet;
