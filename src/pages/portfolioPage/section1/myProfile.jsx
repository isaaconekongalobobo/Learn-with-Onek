import {motion} from 'framer-motion'
const profileVariant = {
    hidden: {
        opacity:0,
        x:-20,
    },
    visible: {
        opacity:1,
        x:0,
        transition: {
            delay:0.5
        }
    },
    whenHover: {
        y:-10,
    }
}
const MyProfile = () => {
    return (
        <motion.img 
            variants={profileVariant} 
            initial="hidden" 
            animate="visible" 
            whileHover="whenHover"
            src="portfolio/mon-design-compressed.png" 
            alt="mon profil" 
            className=" size-80 sm:w-[20%] rounded "
        />
    );
}

export default MyProfile;
