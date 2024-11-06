import Header from "../../components/generalAndPartialsComponents/header/header";
import Section1 from "./section1/section1";
import Section2 from "./section2/section2";

const PortFolioPage = () => {
    return (
        <>
            <Header/>
            <main className="pt-[65px] sm:pt-20 h-full bg-[#1B4D3E]">
                <Section1/>
                <Section2/>
            </main>
                {/* <div className=''>
                    <img src="/sectionAboutIsaac/bg-about-isaac.jpg" alt="Initial isaac onek"  className='relative top-20 sm:top-0' />
                </div> */}
        </>
    );
}

export default PortFolioPage;
