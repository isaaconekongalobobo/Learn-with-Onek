/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
const apiKey = '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'
import SectionsTitle from "../../../components/generalAndPartialsComponents/sectionsTitle";
import ChatForm from "./chatForm/chatForm";
// J'importe les differents methode et propriete du module openAI
import OpenAI from "openai";
import ChatSection from "./chatSection/chatSection";
import Loader from "../../../components/generalAndPartialsComponents/loader";
const openAI = new OpenAI ({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true 
})


const MainSection = () => {
    const [userQuestion, setUserQuestion] = useState ('') 
    const [chats, setChats] = useState()
    const [isTyping, setIsTyping] = useState(false)
    const [error, setError] = useState (false)
    const surch = async () => {
        setIsTyping (true)
        await openAI.chat.completions.create ({
            model: 'gpt-4o-mini',
            messages: [{role: "user",content: userQuestion }]
        }).then ((response) => {
            const message = response.choices[0].message
            setChats (message)
        }).catch ((error) => {
            console.log(`Erreur : ${error}`);
            setError (true)
        }).finally (() => {
            setIsTyping (false)
        })
        
    }

    useEffect (() => {
        surch ()
    }, [userQuestion])
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