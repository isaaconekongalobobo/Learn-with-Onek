/* eslint-disable react/prop-types */
// Importation de framer-motion
import {motion} from 'framer-motion'
import OngletSidebar from './ongletSidebar';

// Variant pour animer la side-bar
const sidebarVariant = {
  hidden: {
    x: 80,
    opacity: 0,
  },
  visible: {
    x:0,
    opacity:1,
  }
}

const Sidebar = ({sidebar, setSideBar}) => {
  // Fonction pour mettre le state a false et masquer ainsi la side-bar
  const updateSideBar = () => setSideBar (false)
  return (
    <>
      <motion.nav variants={sidebarVariant} initial="hidden" whileInView="visible" className= {sidebar? " sm:hidden fixed z-30 left-24 bg-white h-full w-[90%] shadow-sm shadow-black" : "hidden" }  >
        <div className="text-principale text-[18px] flex flex-col gap-5 p-2 pt-5">
          <span className="" onClick={updateSideBar}>Fermer</span>
          <div className='flex flex-col relative left-[18%]'>
            <h1 className="relative text-xs sm:text-xl  font-bold font-dortmund">
              <strong className="font-pavelt">Learn With Onek</strong>
            </h1>
            {/* Appel des differents onglets */}
            <OngletSidebar url="/" title="Acceuil"  />
            <OngletSidebar url="/about" title="A propos"  />
            <OngletSidebar url="/portfolio" title="Portfolio"  />
            <OngletSidebar url="/tutoriels" title="Tutoriels"  />
            <OngletSidebar url="/contact" title="Contact"  />
          </div>
        </div>
      </motion.nav>
    </>
  );
}

export default Sidebar;
