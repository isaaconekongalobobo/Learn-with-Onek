import {motion} from 'framer-motion'
const BtnSubmit = () => {
    return (
        <button>
            <motion.svg whileHover={{scale:1.1, y:-2}} xmlns="http://www.w3.org/2000/svg" className="size-10 rotate-[-93deg] sm:rotate-0 " width="0.94em" height="1em" viewBox="0 0 15 16">
                <path fill="green" d="M12.49 7.14L3.44 2.27c-.76-.41-1.64.3-1.4 1.13l1.24 4.34q.075.27 0 .54l-1.24 4.34c-.24.83.64 1.54 1.4 1.13l9.05-4.87a.98.98 0 0 0 0-1.72Z"></path>
            </motion.svg>
        </button>
    );
}

export default BtnSubmit;
