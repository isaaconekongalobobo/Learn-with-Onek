import BoutonCta from "../header/boutonCta"
import Illustration1 from "./illustration1"
import SectionAbout from "./sectionAbout/sectionAbout"
import SectionAboutIsaac from "./sectionParcours/sectionAboutIsaac"

const Main = () => {
    return (
        <>
            <main className="flex flex-col">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-900 h-auto">
                    <div className="p-10 flex flex-col sm:flex-row bottom-80 gap-36">
                        <div className="relative top-32 flex flex-col gap-5">
                            <h1 className="text-4xl font-pavelt text-center sm:text-left sm:relative sm:left-2">Viens apprendre avec moi les technos qui vont faconner le <strong className="text-jaune opacity-90">futur!</strong></h1>
                            {/* J'importe le CTA */}
                            <p className="text-center">Avec cette plateforme, nous allons tous ensemble explorer cet univers du developpement web, et apprendre des trucs et astuces pour booster ta productivite! <br /> Alors, tu veux essayer ? </p>
                            <div className="relative top-5 left-16 sm:left-60 ">
                                <BoutonCta/>
                            </div>
                        </div>
                        <div>
                            <Illustration1/>
                        </div>                        
                    </div>
                </div>
                {/* Section About */}
                <SectionAbout/>
                {/* Section About Isaac (l'auteur de cette page) */}
                <h1>gggg</h1>
                <SectionAboutIsaac/>
            </main>
        </>
    )
}

export default Main