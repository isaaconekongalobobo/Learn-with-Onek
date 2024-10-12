import { useState } from "react"
import BoutonCta from "./boutonCta"
import Sidebar from "./sidebar/sidebar"

// Importation de framer-motion
import {motion} from 'framer-motion'
import PageTitle from "./pageTitle"
import Onglets from "./onglets"
const Header  = () => {
    // Je creer un state pour gerer l'affichage de la sidebar
    const [sidebar, setSideBar] = useState(false)
    // Fonction pour modifier le state de sidebar
    const updateSideBar = () => setSideBar (!sidebar)
    return (
        <>
            <header>
                <nav>
                    <div className="fixed w-full z-20 h-[10%] sm:h-[12%] md:h-[10%] flex bg-principale p-5 sm:p-10 sm:pl-20 gap-12 sm:gap-28 md:gap-5 justify-around  items-center shadow-lg">
                        <PageTitle/>
                        <Onglets/>
                        <BoutonCta btnStyle="hidden sm:block tablet:hidden  bg-aliceblue text-principale sm:p-[14px] rounded-full lg:text-lg lg:p-4" />
                        <button className="sm:hidden md:block tablet:block">
                            <motion.img whileHover={{scale:1.1}} onClick={updateSideBar} src="burger-menu.png" className="size-10 relative left-5"/>
                        </button>
                    </div>
                </nav>
                {/* La Sidebar pour les appareils mobiles et tablette */}
                <Sidebar sidebar={sidebar} setSideBar={setSideBar} />
            </header>
        </>
    )
}

export default Header