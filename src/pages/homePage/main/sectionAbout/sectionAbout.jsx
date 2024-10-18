import GalleryLangages from "./galleryLangages"
import SecondaryButton from "../../../../components/generalAndPartialsComponents/secondaryButton"
// Importation de framer motion

const SectionAbout = () => {
    return (
        <>
            <section className="bg-[#1B4D3E] flex flex-col sm:flex-row tablet:flex-col gap-5 sm:gap-0 p-10 sm:pt-20 sm:pb-20 justify-around items-center ">
                <div className="sm:w-[700px]">
                    <div className="flex flex-col gap-6">
                        <div>
                            <h2 className=" text-[25px] font-bold relative  sm:bottom-0 text-center sm:text-left    ">Venez apprendre avec moi les technos qui vous permetrons de rentrer dans l&apos;univers de la programmation informatique</h2>
                            <hr className="mb-[4%] mt-[4%] w-[50%] sm:w-[22%] m-auto sm:m-0 sm:mb-[2%] sm:mt-[2%]" />
                            <p className="w-[100%] sm:w-full mb-5 text-[105%] text-wrap  text-left sm:text-left">Venez apprendre 
                            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-jaune relative inline-block m-2">
                                <span className="relative text-principale italic" >
                                    gratuitement 
                                </span>
                            </span>
                            des langages de programation tel  que le <strong className="italic">HTML</strong>, le<strong className="italic">CSS3</strong>, le <strong className="italic">JavaScript</strong>, le <strong className="italic">Php</strong> et plein d&apos;autres... </p>                            
                        </div>
                        {/* Bouton pour afficher tout les catalogues, visible uniquement sur pc */}
                        <div className="m-auto hidden tablet:hidden sm:block sm:relative sm:right-1/3 bottom-5 ">
                            <SecondaryButton text="Voir tout le catalogue" url="/about" />
                        </div>                        
                    </div>
                </div>
                <GalleryLangages/>

                {/* Bouton pour afficher tout les catalogues, visible uniquement sur des petites appareils */}
                <div className="m-auto sm:hidden tablet:block">
                    <SecondaryButton text="Voir tout le catalogue" url="/about" />
                </div> 
            </section>
        </>
    )
}

export default SectionAbout