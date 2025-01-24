/* eslint-disable react/prop-types */
import OngletFooter from "./ongletFooter";
import SocialMediaSection from "./socialMedias/socialMediaSection";

const Footer = () => {
    return (
        <footer className={`bg-slate-50 p-5`}>
            <div className="flex flex-col gap-4 items-center sm:flex-row">
                <div className="flex flex-col sm:flex-row sm:w-1/4 justify-center items-center sm:pt-10">
                    <img src="/sectionAboutIsaac/all.png" alt="logotype de Learn with Onek" className="w-28" />
                    <h5 className="text-principale font-pavelt font-semibold text-sm">LEARN WITH ONEK</h5>
                </div> 
                <div className="flex flex-col items-center  gap-2 w-2/4 justify-center">
                    <h6 className="text-principale text-xl font-medium">À consulter</h6>
                    <div className="text-principale flex flex-col sm:flex-row sm:gap-3 items-center sm:items-start text-[19px]">
                        <OngletFooter ancre="/about" text="À propos" bar={true} />
                        <OngletFooter ancre="/portfolio" text="Portfolio" bar={true} />
                        <OngletFooter ancre="/tutoriels" text="Tutoriels" bar={true} />
                        <OngletFooter ancre="/chatbot" text="Chatbot" bar={true} />
                        <OngletFooter ancre="/contact" text="Contact" bar={false} />
                    </div>
                </div>
                {/* Reseaux sociaux pro */}
                <SocialMediaSection/>
            </div>
            <div>

            </div>
        </footer>
    );
}

export default Footer;
