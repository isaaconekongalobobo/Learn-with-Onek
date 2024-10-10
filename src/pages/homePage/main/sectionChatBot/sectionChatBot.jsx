import GeneralButton from "../../../../components/generalAndPartialsComponents/generalButton";
import SectionsTitle from "../../../../components/generalAndPartialsComponents/sectionsTitle";

const SectionChatBot = () => {
    return (
        <section className="relative top-[500px] bg-red-400">
            <div>
                <div>
                   <SectionsTitle text={'Demander à mon chatbot de vous aider, comme un ami !'} /> 
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam corrupti libero laboriosam quo cupiditate eum quasi atque. Repudiandae neque et beatae delectus, expedita, veniam deleniti, cum laborum aperiam rerum sequi.</p>
                <div>
                    <GeneralButton btnStyle="" text="Voir le bot, c'est gratuit" />
                </div>
            </div>
            <div>

            </div>
        </section>
    );
}

export default SectionChatBot;
