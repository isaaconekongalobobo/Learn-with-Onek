/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import OngletSidebar from './ongletSidebar';
import { Link } from 'react-router-dom';

const sidebarVariant = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x:0,
    opacity:1,
  }
}

const Sidebar = ({ sidebar }) => {
  return (
    <>
      <motion.nav variants={sidebarVariant} initial="hidden" whileInView="visible" 
      className= {sidebar? " desktop:hidde fixed top-0 left-0 w-64 tablet:w-2/4 h-screen  bg-main-green bg-opacity-95 shadow-lg px-4 tablet:px-8 py-2 tablet:py-4 text-white " : "hidden" }  >
        <div className="text-principale text-[18px] flex flex-col gap-5 pt-5">
          <div className='flex flex-col gap-8'>
            <Link to="/" >
              <h1 className="font-pavelt text-white xs:text-sm tablet:text-xl">Learn With Onek</h1>
            </Link>  

            <div className='flex flex-col gap-4'>
              <OngletSidebar url="/" title="Acceuil"  />
              <OngletSidebar url="/about" title="A propos"  />
              <OngletSidebar url="/portfolio" title="Portfolio"  />
              <OngletSidebar url="/tutoriels" title="Tutoriels"  />
              <OngletSidebar url="/contact" title="Contact"  />              
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

export default Sidebar;
