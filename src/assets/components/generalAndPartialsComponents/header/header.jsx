import BoutonCta from "./boutonCta"
import Onglet from "./onglet"

const Header  = () => {
    return (
        <>
            <header>
                <nav>
                    <div className=" fixed w-full z-20 flex bg-principale p-6 gap-12 sm:gap-28 justify-around shadow-lg">
                        <h1 className="relative  text-xl opacity-90 font-bold font-dortmund">Learn With <strong className="font-pavelt">Onek</strong></h1>
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
                        <div className="sm:hidden">
                            <img src="burger-menu.png" alt="" className="sm:hidden w-10" />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header