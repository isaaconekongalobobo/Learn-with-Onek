/* eslint-disable react/prop-types */

// Importation du composant <Link> de react router afin de faire la navigation entre les 
// pages de mon site avec react-router-dom
import { NavLink } from "react-router-dom";
const Onglet  = (props) => {
    return (
        <>
            <li>
                {/* Je passe au props to du composant <Link> l'ancre, cad le chemin sur lequel mene
                cet onglet. */}
                <NavLink to={props.ancre} className="md:text-[12px] lg:text-lg ">{props.nom} {props.barre} </NavLink>
            </li>
        </>
    )
}

export default Onglet