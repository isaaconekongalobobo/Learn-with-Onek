// J'importe framer motion
import {motion} from 'framer-motion'

// Je creer des variants pour animer le svg
const svgVariant = {
    unLiked: {

    },
    liked: {
        
    }

}

const ShareIcon = () => {
    return (
        <motion.svg
            variants={svgVariant} 
            initial="unLiked" 
            whileTap="liked"
            className="size-8"
            whileHover={{ scale:1.5}} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="white">
                    <path d="m20.393 8.032l-1.747-1.517c-1.259-1.093-1.752-1.681-2.434-1.474c-.85.26-.57 1.895-.57 2.447c-1.321 0-2.695-.101-3.998.11c-4.3.7-5.644 3.759-5.644 7.055c1.217-.747 2.433-1.578 3.895-1.924c1.826-.432 3.865-.226 5.747-.226c0 .552-.28 2.188.57 2.447c.772.236 1.175-.38 2.434-1.473l1.747-1.517C21.464 11.03 22 10.564 22 9.996s-.536-1.034-1.607-1.964"></path>
                    <path d="M10.568 3c-3.86.007-5.882.102-7.174 1.39C2 5.783 2 8.022 2 12.5s0 6.717 1.394 8.109C4.788 22 7.032 22 11.52 22s6.73 0 8.125-1.391C20.615 19.64 20.91 18.26 21 16"></path>
                </g>
        </motion.svg>
    );
}

export default ShareIcon;