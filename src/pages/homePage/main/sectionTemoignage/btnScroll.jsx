/* eslint-disable react/prop-types */

const BtnScroll = ({scrollRef, scrollOffset}) => {
    // Fonction pour faire le scroll
    const scroll = () => {
        scrollRef.current.scrollLeft += scrollOffset
    }
    return (
        <button onClick={() => scroll(scrollOffset)} 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 z-10"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </button>
    );
}

export default BtnScroll;
