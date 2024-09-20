import GalleryLangages from "./galleryLangages"

const SectionAbout = () => {
    return (
        <>
            <section className="bg-principale flex flex-col sm:flex-row p-5 pt-16 text-sm sm:p-20  ">
                <div className="relative sm:w-texteSectionAcceuil sm:top-32">
                    <h2 className="font-bold font-dortmund text-3xl text-center sm:text-left mb-5">Venez Apprendre Avec Moi Les Technos Qui Vous Permetrons de Rentrer dans L&apos;univers de la Programmation Informatique</h2>
                    <p className="w-80 mb-5 text-xl sm:w-full text-center sm:text-left">Venez apprendre 
                        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-jaune relative inline-block m-2">
                            <span className="relative text-principale italic">
                                gratuitement 
                            </span>
                        </span>
                        des langages de programation tel  que le <strong className="italic">HTML</strong>, le<strong className="italic">CSS3</strong>, le <strong className="italic">JavaScript</strong>, le <strong className="italic">Php</strong> et plein d&apos;autres... </p>
                        <div className="hidden sm:flex mt-6 sm:w-full sm:p-5">
                            <a href="" className="bg-jaune p-5 rounded-full relative sm:left-44" >Voir tout le catalogue</a>
                        </div>
                </div>
                <GalleryLangages/>
                <div className="mt-6 sm:hidden w-full mb-5">
                    <a href="" className="bg-jaune p-5 rounded-full relative left-24 hover:bg-white hover:text-principale hover:border-jaune" >Voir tout le catalogue</a>
                </div>
            </section>
        </>
    )
}

export default SectionAbout