/* eslint-disable react/prop-types */
import BtnSubmit from "./btnSubmit";
import { useForm } from 'react-hook-form';

const ChatForm = ({setUserQuestion, setFirstMount}) => {
    const {register, handleSubmit} = useForm ()
    const whenSubmit = (data) => {
        // Je recupere la question de l'utilisateur
        const {question} = data
        setFirstMount (false)
        setUserQuestion (question)
    }
    return (
        <div>
            <form onSubmit={handleSubmit (whenSubmit)} className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                <input type="text" placeholder="Entrez votre question" {...register('question')}  className=" w-full sm:w-2/4 p-4 sm:p-3 pl-5 bg-[#1B4D3E] rounded-full " />
                <BtnSubmit/>
            </form>
        </div>
    );
}

export default ChatForm;
