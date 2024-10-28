import Footer from "../../components/generalAndPartialsComponents/footer/footer";
import Header from "../../components/generalAndPartialsComponents/header/header";
import Section1 from "./section1/section1";

const PortFolioPage = () => {
    return (
        <>
            <Header/>
            <main className="pt-[65px] sm:pt-20 h-full ">
                <Section1/>
            </main>
            <Footer topPhone="0" topPc="0" />
                {/* <div className=''>
                    <img src="/sectionAboutIsaac/bg-about-isaac.jpg" alt="Initial isaac onek"  className='relative top-20 sm:top-0' />
                </div> */}
        </>
    );
}

export default PortFolioPage;
