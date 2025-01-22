import { useState } from "react"
import Sidebar from "./sidebar/sidebar"

// Importation de framer-motion
import {motion} from 'framer-motion'
import Onglets from "./onglets"
import CtvInscription from "../ctvInscription"


const Header  = () => {
    const [sidebar, setSideBar] = useState(false)

    const updateSideBar = () => setSideBar (!sidebar)
    return (
        <>
            <nav className="fixed w-full z-30 flex justify-between px-16 xs:px-8 py-3 xs:py-2 items-center bg-main-green desktop:bg-opacity-60 shadow-lg desktop:backdrop-blur-md">
                <h1 className="font-bold font-pavelt xs:text-sm">Learn With Onek </h1>
                <div className="desktop:flex hidden  items-center gap-4">
                    <Onglets/>
                    <CtvInscription/>                        
                </div>

                <button className="desktop:hidden">
                    <motion.img whileHover={{scale:1.1}} onClick={updateSideBar} src="burger-menu.png" className="size-10 relative left-5"/>
                </button>
                <Sidebar sidebar={sidebar} setSideBar={setSideBar} />
            </nav>
        </>
    )
}

export default Header