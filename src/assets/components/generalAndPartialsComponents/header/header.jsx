import BoutonCta from "./boutonCta"
import Onglet from "./onglet"
// import { useState } from "react"

const Header  = () => {
    // Je creer un state pour gerer l'affichage de la sidebar
    // const [sidebar, setSideBar] = useState(false)
    return (
        <>
            <header>
                <nav>
                    <div className=" fixed w-full z-20 h-[10%] sm:h-[12%] flex bg-principale  p-6 gap-12 sm:gap-28 justify-around items-center shadow-lg">
                        <h1 className="relative right-4 text-xs sm:text-xl  font-bold font-dortmund"><strong className="font-pavelt">Learn With Onek</strong></h1>
                        <ul className="hidden sm:flex gap-5">
                            {/* J'importe plusieurs fois le composant onglet */}
                            <Onglet ancre="/" nom="Acceuil" barre="|" />
                            <Onglet ancre="/about" nom="A propos" barre="|" />
                            <Onglet ancre="/portfolio" nom="Mon portfolio" barre="|" />
                            <Onglet ancre="/tutoriels" nom="Tutoriels" barre="|" />
                            <Onglet ancre="/contact" nom="Contact"  />
                        </ul>
                        {/* J'importe le composant pour le CTA */}
                        <div className="hidden sm:block sm:relative ">
                            <BoutonCta/> 
                        </div>
                        <button className="sm:hidden">
                            <img src="burger-menu.png" alt="" className="sm:hidden size-10 relative left-5" />
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header