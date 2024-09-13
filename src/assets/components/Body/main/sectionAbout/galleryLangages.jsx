import Icone from "./icon"
const GalleryLangages = () => {
    return (
        <>
            <div className=" flex flex-col sm:grid sm:grid-cols-2 sm:w-iconelangage">
                <Icone source="/iconeLangages/icone-html.png" description="Icone html" /> 
                <Icone source="/iconeLangages/icone-css.png" description="Icone Css" /> 
                <Icone source="/iconeLangages/icone-js.png" description="Icone JavaScript" /> 
                <Icone source="/iconeLangages/icone-php.png" description="Icone Php" /> 
            </div>
        </>
    )
}

export default GalleryLangages