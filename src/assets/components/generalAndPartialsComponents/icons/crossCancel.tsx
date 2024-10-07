import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

type CrossType = {
    ancre?: string,
    action?: () => void
}

const CrossCancel = ({ancre, action}) => {
    return (
        <>
        <Link to={ancre} >
            <motion.svg onClick={action} whileHover={{scale:1.3}} className='size-7 relative left-60'  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
                <path fill="#00693E" fillRule="evenodd" d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z" clipRule="evenodd"></path>
            </motion.svg>
        </Link>
        </>
    );
}

export default CrossCancel;
