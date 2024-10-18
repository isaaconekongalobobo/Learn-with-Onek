import SectionsTitle from "../../../components/generalAndPartialsComponents/sectionsTitle";
import ChatForm from "./chatForm/chatForm";

const MainSection = () => {
    return (
        <main className="relative top-20 p-10 h-full">
            <section className="flex flex-col gap-3">
                <div className="flex justify-center">
                    <img className="w-48" src="/sectionAboutIsaac/all.png" alt="Icone lean with Onek" />
                </div>
                <div>
                    <SectionsTitle text="Pose moi ta question" />
                </div>
                <ChatForm/>
            </section>
        </main>
    );
}

export default MainSection;
