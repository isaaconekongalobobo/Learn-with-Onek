/* eslint-disable react/prop-types */

// Importation du composant <Link> de react router afin de faire la navigation entre les 
// pages de mon site avec react-router-dom
import { NavLink } from "react-router-dom";
const Onglet  = (props) => {
    return (
        <li>
            <NavLink to={props.ancre} >{props.nom} {props.barre} </NavLink>
        </li>
    )
}

export default Onglet