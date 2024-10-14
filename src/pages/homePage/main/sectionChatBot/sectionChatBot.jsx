import SecondaryButton from "../../../../components/generalAndPartialsComponents/secondaryButton";
import SectionsTitle from "../../../../components/generalAndPartialsComponents/sectionsTitle";
import BotAmimatedIllustration from "./botAmimatedIllustration";

const SectionChatBot = () => {
    return (
        <section className="relative top-[680px] sm:top-[420px] p-5 pt-32 sm:pt-14 bg-white flex flex-col gap-5">
            <div className="text-left">
                <SectionsTitle text={'Demander à mon chatbot de vous aider, comme un ami !'} /> 
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full pl-5">
                <div className="sm:w-2/4 sm:pt-10 flex flex-col gap-5">
                    <div>
                        <p className="text-slate-600 sm:text-start">Je suis ravi de vous présenter ma nouvelle fonctionnalité : un chatbot intelligent conçu pour répondre à toutes vos questions éducatives ! Que vous souhaitiez en savoir plus sur un sujet spécifique, obtenir des explications ou simplement explorer de nouvelles idées, ce robot est là pour vous aider, 24/7.</p>
                        <div className="text-slate-600 mt-2">
                            <p className="text-[18px] mb-2 text-principale font-dortmund">Pourquoi utiliser mon chatbot ?</p>
                            <ul className="list-disc pl-5 flex flex-col gap-2" >
                                <li><strong>Réponses instantanées : </strong>Fini les attentes ! Je vous fournis des réponses immédiates à vos questions.</li>
                                <li><strong>Facilité d’utilisation : </strong>Il vous suffit de poser votre question pour obtenir des informations claires et précises, facilement accessibles.</li>
                                <li><strong>Accessibilité : </strong> Disponible à tout moment, je vous accompagne dans votre quête de connaissances, que ce soit sur ordinateur ou mobile.</li>
                                <li><strong>Guidage personnalisé : </strong>Selon vos intérêts, je vous orienterai vers des ressources pertinentes, vous assurant de trouver rapidement ce que vous cherchez.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <SecondaryButton text="J'essaie le robot, c'est gratuit !" />
                    </div>                    
                </div>
                <div className="sm:w-2/4">
                    <BotAmimatedIllustration/>
                </div>
            </div>

        </section>
    );
}

export default SectionChatBot;
