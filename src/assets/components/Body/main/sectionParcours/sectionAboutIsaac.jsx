
const SectionAboutIsaac = () => {
    return (
        <div className="pt-28" >
            <div className='absolute flex flex-col w-full z-10 p-6 gap-12 sm:gap-28 justify-around '>
                <h1 className='text-principale text-3xl text-center font-bold relative bottom-32  sm:bottom-24'>
                    Je partage mon 
                    <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-jaune relative inline-block m-2'>
                        <span className="relative text-principale italic">
                            parcours  
                        </span>                         
                    </span>
                    avec vous...
                </h1>
                <div>
                    <div className=''>
                        <img src="/sectionAboutIsaac/all.png" alt="illustration des mes competences" className='w-illustration2 relative bottom-48 left-8 sm:bottom-48' />
                    </div>
                </div>
            </div>
            {/* <div className='opacity-0'>
                <img src="/sectionAboutIsaac/bg-about-isaac.jpg" alt="Initial isaac onek"  className='' />
            </div> */}

        </div>
    );
}

export default SectionAboutIsaac;
