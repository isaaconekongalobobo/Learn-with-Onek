/* eslint-disable react/prop-types */
import {motion} from  'framer-motion'
const PublicationImage = ({ urlImage }) => {
    return (
        <motion.div className='bg-center bg-cover w-64 xs:w-full h-36 xs:h-40 rounded' style={{ backgroundImage: `url(${urlImage})`}}/>
    );
}

export default PublicationImage;
