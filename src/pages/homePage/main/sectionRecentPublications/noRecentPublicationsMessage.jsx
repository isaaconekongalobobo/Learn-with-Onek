
const NoRecentPublicationsMessage = () => {
    return (
        <>
            <div className='flex flex-col-reverse justify-center items-center'>
                <p className=" text-principale text-center" >Aucune publication recente</p>
                <img src="/sectionRecentPublications/Empty.gif" alt="Illustration aucune publication"
                className='w-52'
                />
            </div>
        </>
    );
}

export default NoRecentPublicationsMessage;
