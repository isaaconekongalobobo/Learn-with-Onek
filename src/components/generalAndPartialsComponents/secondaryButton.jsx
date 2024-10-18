/* eslint-disable react/prop-types */
import {motion} from 'framer-motion'
const btnVariant= {
    whenHover: {
        scale: 1.1, x:20
    }
}
const SecondaryButton = ({text, url}) => {
    const redirect = (url) => {
        window.location.href = url
    }
    return (
        <motion.button className="bg-[#7ED218] p-4 pl-5 pr-5 flex items-center gap-3 rounded" onClick={()=> {redirect(url)}} variants={btnVariant} whileHover={"whenHover"} >
            <span className="text-[#1B4D3E]">{text}</span>
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
