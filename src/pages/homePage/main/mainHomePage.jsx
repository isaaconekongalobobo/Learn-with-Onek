import Illustration1 from "./illustration1"
import SectionAbout from "./sectionAbout/sectionAbout"
import SectionAboutIsaac from "./sectionParcours/sectionAboutIsaac"

// J'importe le composant Acroche qui contient le texte anime de la section 1
import SectionRecentPublications from "../main/sectionRecentPublications/sectionRecentPublications"
import Accroche from "../main/section1/accroche"
import BoutonCta from "../../../components/generalAndPartialsComponents/header/boutonCta"
import SectionChatBot from "./sectionChatBot/sectionChatBot"
import CallToValue from "./callToValue"





const MainHomePage = () => {
    return (
        <> 
            <main className="flex flex-col bg-gradient-to-r from-emerald-500 to-emerald-900 h-auto">
                <div className="flex flex-col sm:flex-row sm:p-10 pb-12 sm:pb-40 tablet:pb-40 bottom-80 gap-24 sm:gap-32 tablet:gap-5">
                    <div className="relative top-24 flex flex-col  gap-5 p-10   ">
                            <CallToValue/>
                            <div>
                                <Accroche text="Viens apprendre avec moi les technos qui vont faconner le futur!" />
                            </div>
                            <p className="tablet:text-start tablet:pl-2">Avec cette plateforme, nous allons tous ensemble explorer cet univers du developpement web, et apprendre des trucs et astuces pour booster ta productivite! <br /> Alors, tu veux essayer ? </p>
                            {/* J'importe le CTA */}
                            <div className="pt-2 tablet:pl-2">
                                <BoutonCta/>
                            </div>
                    </div>
                    <div className="w-3/4 relative top-8 sm:top-[130px] left-12 sm:left-0">
                        <Illustration1/>
                    </div>                        
                </div>
                <SectionAbout/>
                <SectionAboutIsaac/>
                <SectionRecentPublications/>
                <SectionChatBot/>
            </main>
        </>
    )
}

export default MainHomePage