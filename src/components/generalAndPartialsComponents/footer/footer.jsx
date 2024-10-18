import OngletFooter from "./ongletFooter";

const Footer = () => {
    return (
        <footer className="bg-slate-50 p-5 relative top-[680px]  sm:top-96">
            <div className="flex flex-col sm:flex-row">
                <div className="flex flex-col gap-2 sm:w-1/4 justify-center items-center sm:justify-normal sm:items-start">
                    <h5 className="text-principale font-pavelt font-semibold">LEARN WITH ONEK</h5>
                    <img src="/sectionAboutIsaac/all.png" alt="logotype de Learn with Onek" className="w-28" />
                </div> 
                <div className="flex flex-col items-center  gap-2">
                    <h6 className="text-principale text-2xl font-medium">À consulter</h6>
                    <div className="text-principale flex flex-col sm:flex-row sm:gap-3 items-center sm:items-start text-[19px]">
                        <OngletFooter ancre="/about" text="À propos" bar={true} />
                        <OngletFooter ancre="/portfolio" text="Portfolio" bar={true} />
                        <OngletFooter ancre="/tutoriels" text="Tutoriels" bar={true} />
                        <OngletFooter ancre="/chatbot" text="Chatbot learn with Onek" bar={true} />
                        <OngletFooter ancre="/contact" text="Contact" bar={false} />
                    </div>
                </div>
                <div className="flex flex-col items-center">

                </div>            
            </div>
            <div>

            </div>
        </footer>
    );
}

export default Footer;
