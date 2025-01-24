import GalleryLangages from "./galleryLangages"
import SecondaryButton from "../../../../components/generalAndPartialsComponents/secondaryButton"
// Importation de framer motion

const SectionAbout = () => {
    return (
        <>
            <section className="bg-main-green flex flex-col sm:flex-row gap-5 px-16 xs:px-8 py-10">
                <div className="flex flex-col gap-2 xs:gap-6 desktop:w-2/4">
                    <div className="flex flex-col gap-4 xs:gap-8">
                        <h2 className="text-2xl ">Venez apprendre avec moi les technos qui vous permetrons de rentrer dans l&apos;univers de la programmation informatique</h2>
                        <p className="mb-5 text-[105%] text-wrap  text-left sm:text-left">Venez apprendre 
                            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-jaune relative inline-block m-2">
                                <span className="relative text-principale italic" > gratuitement </span>
                            </span>
                            des langages de programation tel  que le <strong className="italic">HTML</strong>, le<strong className="italic">CSS3</strong>, le <strong className="italic">JavaScript</strong>, le <strong className="italic">Php</strong> et plein d&apos;autres... </p>                            
                    </div>
                    <SecondaryButton text="Voir tout les modules" url="/about" />                       
                </div>
                <GalleryLangages/>
            </section>
        </>
    )
}

export default SectionAbout