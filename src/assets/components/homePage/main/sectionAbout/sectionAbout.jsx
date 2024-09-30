import { NavLink } from "react-router-dom"
import GalleryLangages from "./galleryLangages"
// Importation de framer motion

const SectionAbout = () => {
    return (
        <>
            <section className="bg-principale flex flex-col sm:flex-row gap-5 sm:gap-0 p-10 sm:pt-20 sm:pb-20 justify-around items-center ">
                <div className="sm:w-[700px]">
                    <div className="flex flex-col gap-6">
                        <div>
                            <h2 className="font-medium font-dortmund text-[130%] text-left text-balance w-[108%] mb-[2%]">Venez apprendre avec moi les technos qui vous permetrons de rentrer dans l&apos;univers de la programmation informatique</h2>
                            <hr className="mb-[4%]" />
                            <p className="w-[100%] sm:w-full mb-5 text-[105%] text-wrap  text-left sm:text-left">Venez apprendre 
                            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-jaune relative inline-block m-2">
                                <span className="relative text-principale italic" >
                                    gratuitement 
                                </span>
                            </span>
                            des langages de programation tel  que le <strong className="italic">HTML</strong>, le<strong className="italic">CSS3</strong>, le <strong className="italic">JavaScript</strong>, le <strong className="italic">Php</strong> et plein d&apos;autres... </p>                            
                        </div>
                        {/* Bouton pour afficher tout les catalogues, visible uniquement sur pc */}
                        <div className="m-auto hidden sm:block">
                            <NavLink  to="/tutoriels/modules" className="bg-jaune p-3 rounded-full " >Voir tout le catalogue</NavLink>
                        </div>                        
                    </div>
                </div>
                <GalleryLangages/>

                {/* Bouton pour afficher tout les catalogues, visible uniquement sur des petites appareils */}
                <div className="m-auto sm:hidden">
                            <NavLink  to="/tutoriels/modules" className="bg-jaune p-3 rounded-full " >Voir tout le catalogue</NavLink>
                </div> 
            </section>
        </>
    )
}

export default SectionAbout