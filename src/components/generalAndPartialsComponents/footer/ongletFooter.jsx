/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import {motion} from 'framer-motion'

const OngletFooter = ({ancre, text, bar}) => {
    return (
        <NavLink to={ancre}>
            <div className="flex gap-2">
                <motion.span className="hover:text-jaune" whileHover={{scale:1.1}} >{text}</motion.span>
                <span className="hidden sm:block">{bar && "|"}</span>                
            </div>
        </NavLink>
    );
}

export default OngletFooter;
