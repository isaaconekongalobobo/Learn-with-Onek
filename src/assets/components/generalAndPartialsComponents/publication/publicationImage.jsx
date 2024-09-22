/* eslint-disable react/prop-types */
import {motion} from  'framer-motion'
const PublicationImage = ({urlImage, pubDescription}) => {
    return (
        <>
            <motion.img className="w-[250px] rounded-lg" src={urlImage} alt={pubDescription} onClick="" whileHover={{y:-3}} />
        </>
    );
}

export default PublicationImage;
