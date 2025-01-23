/* eslint-disable react/prop-types */
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
const btnVariant= {
    whenHover: { y: -5 }
}
const SecondaryButton = ({text, url}) => {
    // Use navigate est un hook de react qui permet de naviguer entre differentes url 
    const navigate = useNavigate()
    const redirect = (url) => {
        navigate (url)
    }
    return (
        <motion.button className="bg-secondary-green bg-opacity-90 hover:bg-opacity-100 px-4 py-3 flex items-center justify-center gap-3 rounded w-52" onClick={()=> {redirect(url)}} variants={btnVariant} whileHover={"whenHover"} >
            <span className="text-main-green">{text}</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </span>
        </motion.button>
    );
}

export default SecondaryButton;
