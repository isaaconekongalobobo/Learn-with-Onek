import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
const btnVariant= {
    whenHover: {
        scale: 1.1
    }
}

const CtvNewsLetters = () => {
    const navigate = useNavigate()
    return (
        <motion.button className="bg-[#1B4D3E] p-3 pl-5 pr-5 flex items-center gap-3 rounded" onClick={()=> {navigate ('/newsletters')}} variants={btnVariant} whileHover={"whenHover"}>
            <svg className="size-8" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" d="M26.755 39.536L6.31 26.306c-2.236-1.702-2.498-6.702-.239-8.914L19.87 8.465l23.63 15.29l-12.067 7.807a4.78 4.78 0 0 0-2.41 4.207c-.008 1.467.848 3.439 2.41 3.038L43.5 30.999l-5.325-3.445"></path><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" d="m19.87 8.465l1.351 13.428L43.5 23.755"></path></svg>
            <span>{"S'abonner au news letters"}</span>
        </motion.button>
    );
}

export default CtvNewsLetters;
