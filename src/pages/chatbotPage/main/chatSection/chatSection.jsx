import Chat from "./chat";
import ErrorSection from "./errorSection";
/* eslint-disable react/prop-types */
const ChatSection = ({chats, requestError}) => {
    return (
        <section className="p-10">
            {requestError? <ErrorSection/> : <Chat chats={chats} /> }
        </section>
    );
}

export default ChatSection;
