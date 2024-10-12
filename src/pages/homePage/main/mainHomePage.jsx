import Illustration1 from "./illustration1"
import SectionAbout from "./sectionAbout/sectionAbout"
import SectionAboutIsaac from "./sectionParcours/sectionAboutIsaac"

// J'importe le composant Acroche qui contient le texte anime de la section 1
import SectionRecentPublications from "../main/sectionRecentPublications/sectionRecentPublications"
import Accroche from "../main/section1/accroche"
import BoutonCta from "../../../components/generalAndPartialsComponents/header/boutonCta"
import SectionChatBot from "./sectionChatBot/sectionChatBot"





const MainHomePage = () => {
    return (
        <> 
            <main className="flex flex-col">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-900 h-auto">
                    <div className="p-5 sm:pt-10 sm:pb-32 tablet:pb-40 flex flex-col sm:flex-row bottom-80 gap-24 sm:gap-32 tablet:gap-5 items-center">
                        <div className="relative top-32 flex flex-col  gap-5 p-10   ">
                            <Accroche text="Viens apprendre avec moi les technos qui vont faconner le futur!" />
                            <p className="text-center tablet:text-start tablet:pl-2">Avec cette plateforme, nous allons tous ensemble explorer cet univers du developpement web, et apprendre des trucs et astuces pour booster ta productivite! <br /> Alors, tu veux essayer ? </p>
                            {/* J'importe le CTA */}
                            <div className="flex items-center justify-center tablet:justify-start pt-2 tablet:pl-2">
                                <BoutonCta/>
                            </div>
                        </div>
                        {/* Illustration dans la section 1 */}
                        <div className="sm:relative tablet:static top-10 right-10">
                            <Illustration1/>
                        </div>                        
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