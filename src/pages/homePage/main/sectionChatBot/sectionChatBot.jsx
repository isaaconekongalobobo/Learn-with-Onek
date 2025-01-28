import SecondaryButton from "../../../../components/generalAndPartialsComponents/secondaryButton";
import SectionsTitle from "../../../../components/generalAndPartialsComponents/sectionsTitle";
import BotAmimatedIllustration from "./botAmimatedIllustration";

const SectionChatBot = () => {
    return (
        <section className="py-10 px-16 xs:px-8 flex flex-col gap-5">
            <SectionsTitle text={'Demandez à mon chatbot de vous aider, comme un ami !'} /> 
            <div className="flex xs:flex-col items-center justify-center ">
                <div className="sm:w-2/4 flex flex-col items-center gap-5">
                    <div className="flex flex-col gap-4">
                        <p className="text-slate-800 text-center text-xl">Je suis ravi de vous présenter ma nouvelle fonctionnalité : un chatbot intelligent conçu pour répondre à toutes vos questions éducatives ! Que vous souhaitiez en savoir plus sur un sujet spécifique, obtenir des explications ou simplement explorer de nouvelles idées, ce robot est là pour vous aider, 24/7.</p>
                        <div className="text-slate-600 flex flex-col gap-3">
                            <SectionsTitle text="Pourquoi utiliser mon chatbot ?"/>
                            <ul className="list-none flex flex-col gap-2 text-center" >
                                <li><strong>Réponses instantanées : </strong>Fini les attentes ! Il fournis des réponses immédiates à vos questions.</li>
                                <li><strong>Facilité d’utilisation : </strong>Il vous suffit de poser votre question pour obtenir des informations claires et précises, facilement accessibles.</li>
                                <li><strong>Accessibilité : </strong> Disponible à tout moment, il vous accompagne dans votre quête de connaissances, que ce soit sur ordinateur ou mobile.</li>
                                <li><strong>Guidage personnalisé : </strong>Selon vos intérêts, il vous orienterai vers des ressources pertinentes, vous assurant de trouver rapidement ce que vous cherchez.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="xs:hidden w-full flex justify-center ">
                       <SecondaryButton text="Essayer l'assistant" url="/chatbot" />  
                    </div>
                                      
                </div>
                <BotAmimatedIllustration/>
                <div className=" desktop:hidden w-full flex justify-center">
                       <SecondaryButton text="Essayer l'assistant" url="/chatbot" />  
                </div>
            </div>
        </section>
    );
}

export default SectionChatBot;
