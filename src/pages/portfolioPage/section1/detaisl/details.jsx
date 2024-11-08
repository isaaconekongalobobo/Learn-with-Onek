import { FaWhatsapp } from "react-icons/fa";
import SocialMediaButtons from "./socialMedias";

const Details = () => {
    return (
        <div className="flex flex-col gap-5">
            <SocialMediaButtons/>
            <a href="https://wa.me/+243971648935" 
            className="flex items-center justify-center gap-2 p-2 rounded bg-[#7ED218] text-[#1E293B] w-40"
            target="_blank" rel="noopener noreferrer"
            >
                <span>Contactez-moi</span>
                <FaWhatsapp className="font-bold size-6"/>
            </a>
        </div>
    );
}

export default Details;
