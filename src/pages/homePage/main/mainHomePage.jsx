import Illustration1 from "./illustration1"
import SectionAbout from "./sectionAbout/sectionAbout"
import SectionAboutIsaac from "./sectionParcours/sectionAboutIsaac"

import SectionRecentPublications from "../main/sectionRecentPublications/sectionRecentPublications"
import Accroche from "../main/section1/accroche"
import SectionChatBot from "./sectionChatBot/sectionChatBot"
import CallToValue from "./callToValue"
import SectionTemoignage from "./sectionTemoignage/sectionTemoignage"

const MainHomePage = () => {
    return (
        <> 
            <main className="flex flex-col relative top-0 ">
                <section className="flex xs:flex-col items-center pt-32 py-10 px-16 xs:px-8 gap-5 xs:gap-10 bg-gradient-to-r from-emerald-500 to-emerald-900 w-full">
                    <div className="relative flex flex-col  gap-5">
                            <CallToValue/>
                            <Accroche text="Viens apprendre les technos qui vont faconner le futur!" />
                            <p className="tablet:text-start tablet:pl-2">Avec cette plateforme, nous allons tous ensemble explorer cet univers du developpement web, et apprendre des trucs et astuces pour booster ta productivite! <br /> Alors, tu veux essayer ? </p>
                    </div>
                    <Illustration1/>                       
                </section>
                <SectionAbout/>
                <SectionAboutIsaac/>
                <SectionRecentPublications/>
                <SectionChatBot/>
                <SectionTemoignage/>
            </main>
        </>
    )
}

export default MainHomePage