// J'importe framer motion
import {motion} from 'framer-motion'

const CommentsIcon = () => {
    return (
    <motion.svg
        whileHover={{ scale: 1.2 }}
        className="size-8"
        xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M6 14h12v-2H6zm0-3h12V9H6zm0-3h12V6H6zM4 18q-.825 0-1.412-.587T2 16V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v18l-4-4z"></path>
    </motion.svg>
    );
}

export default CommentsIcon;
