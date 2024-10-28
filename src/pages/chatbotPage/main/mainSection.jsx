/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import SectionsTitle from "../../../components/generalAndPartialsComponents/sectionsTitle";
import ChatForm from "./chatForm/chatForm";
import ChatSection from "./chatSection/chatSection";
import Loader from "../../../components/generalAndPartialsComponents/loader";
import axios from "axios";
import ErrorSection from "./chatSection/errorSection";

const MainSection = () => {
    const [userQuestion, setUserQuestion] = useState ('') 
    const [chats, setChats] = useState()
    const [firstMount, setFirstMount] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState ({isError:false, message:''})
    // utilisation cette classe pour controller le temps d'execution de la requette
    const controller = new AbortController ()
    const timeOut = setTimeout (()=> controller.abort (),5000)
    
    const makeRequest = async () => {
        if (!firstMount && userQuestion.length !== 0) {
            setIsLoading (true)
            const data = {userQuestion}
            try {
                await axios.post ('http://localhost:3000/learn-with-onek/ai/prompt', JSON.stringify(data),{
                    headers: {
                        'Content-type': 'application/json',
                        'Accept': 'application/json'
                    },
                    signal: controller.signal
                }).then ((response) => {
                    console.log(`Requette effectue!`);
                }).finally (() => {
                    setIsLoading (false)
                })                
            } catch (error) {
                if (error.code === 'ERR_NETWORK') {
                    setError ({isError:true, message:"Oops! il semble que vous avez un probleme de connexion..."})
                    setIsLoading (false)
                }else if (error.response.status === 403) {
                    setError ({isError:true, message:error.response.data.message})
                    setIsLoading (false)
                }
                if (error.name === 'AbortError') {
                    setError ({isError:true, message:"Le temps de la requete s'est ecoulee"})
                }
            }           
        }

    }
    useEffect (() => {
        makeRequest ()
    }, [userQuestion])
    
    return (
        <main className="relative top-20 p-10 h-full">
            <section className="flex flex-col gap-5">
                <div className="flex justify-center">
                    <img className="w-48" src="/sectionAboutIsaac/all.png" alt="Icone lean with Onek" />
                </div>
                <div>
                    <SectionsTitle text="Pose moi ta question" />
                </div>
                <ChatForm setUserQuestion={setUserQuestion} setFirstMount={setFirstMount} />
            </section>
            {isLoading && <Loader/>}
            {error && <ErrorSection message={error.message} />}
        </main>
    );
}

export default MainSection;
