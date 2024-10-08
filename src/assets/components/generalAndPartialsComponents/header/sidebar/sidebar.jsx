/* eslint-disable react/prop-types */
// Importation de framer-motion
import {motion} from 'framer-motion'
import OngletSidebar from './ongletSidebar';
import { Link } from 'react-router-dom';
import CrossCancel from '../../icons/crossCancel';

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
        <div className="text-principale text-[18px] flex flex-col gap-5 pt-5">
          {/* Icone pour fermer la sidebar */}
          <CrossCancel action={updateSideBar} />
          <div className='flex flex-col '>
            {/* Logotype de l'application */}
            <div>
              <Link to="/" >
                <h1 className="relative text-sm left-5  font-bold font-dortmund">
                  <strong className="font-pavelt">Learn With Onek</strong>
                </h1>            
              </Link>              
            </div>

            {/* Appel des differents onglets */}
            <div className='divide-y'>
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
