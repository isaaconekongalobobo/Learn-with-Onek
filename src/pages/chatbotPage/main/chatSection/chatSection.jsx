import Chat from "./chat";
import ErrorSection from "./errorSection";
/* eslint-disable react/prop-types */
const ChatSection = ({chats, error}) => {
    return (
        <section className="p-10">
            {error? <ErrorSection/> : <Chat chats={chats} /> }
        </section>
    );
}

export default ChatSection;
