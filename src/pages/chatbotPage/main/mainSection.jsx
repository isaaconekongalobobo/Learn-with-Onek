/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import SectionsTitle from "../../../components/generalAndPartialsComponents/sectionsTitle";
import ChatForm from "./chatForm/chatForm";
import ChatSection from "./chatSection/chatSection";
import Loader from "../../../components/generalAndPartialsComponents/loader";

const MainSection = () => {
    const [userQuestion, setUserQuestion] = useState ('') 
    const [chats, setChats] = useState()
    const [isTyping, setIsTyping] = useState(false)
    const [error, setError] = useState (false)
    return (
        <main className="relative top-20 p-10 h-full">
            <section className="flex flex-col gap-3">
                <div className="flex justify-center">
                    <img className="w-48" src="/sectionAboutIsaac/all.png" alt="Icone lean with Onek" />
                </div>
                <div>
                    <SectionsTitle text="Pose moi ta question" />
                </div>
                <ChatForm setUserQuestion={setUserQuestion} />
            </section>
            {isTyping? <Loader/>: <ChatSection chats={chats} error={error} /> }
        </main>
    );
}

export default MainSection;
