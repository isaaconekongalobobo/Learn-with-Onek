import GeneralButton from "../../../../components/generalAndPartialsComponents/generalButton";
import SectionsTitle from "../../../../components/generalAndPartialsComponents/sectionsTitle";
import BotAmimatedIllustration from "./botAmimatedIllustration";

const SectionChatBot = () => {
    return (
        <section className="relative top-[680px] sm:top-[420px] p-5 pt-10 sm:pt-14 bg-white flex flex-col gap-5">
            <div className="text-left">
                <SectionsTitle text={'Demander à mon chatbot de vous aider, comme un ami !'} /> 
            </div>

            <div className="flex gap-3 w-full pt-8">
                <div className="sm:w-2/4">
                    <div>
                        <p className="text-slate-600 text-center sm:text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam corrupti libero laboriosam quo cupiditate eum quasi atque.</p>
                    </div>
                    <div>
                        <GeneralButton btnStyle="" text="Voir le bot, c'est gratuit" />
                    </div>                    
                </div>
                <div className="w-2/4">
                    <BotAmimatedIllustration/>
                </div>
            </div>

        </section>
    );
}

export default SectionChatBot;
