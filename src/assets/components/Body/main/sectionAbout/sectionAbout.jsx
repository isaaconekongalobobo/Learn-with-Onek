import GalleryLangages from "./galleryLangages"

const SectionAbout = () => {
    return (
        <>
            <section className="bg-principale flex flex-col sm:flex-row sm:p-20  ">
                <div className="relative sm:w-texteSectionAcceuil">
                    <h2 className="font-bold font-dortmund text-3xl">Venez apprendre avec moi les technos qui vous permetrons de rentrer dans l&apos;univers de la programmation informatique</h2>
                    <p>Venez apprendre gratuitement  des langages de programation tel que le <strong>HTML</strong>, le<strong>CSS3</strong>, le <strong>JavaScript</strong>, le <strong>Php</strong> et plein d&apos;autres... </p>
                </div>
                <GalleryLangages/>
            </section>
        </>
    )
}

export default SectionAbout