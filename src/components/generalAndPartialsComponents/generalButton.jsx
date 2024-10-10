/* eslint-disable react/prop-types */
const GeneralButton = ({btnStyle,actionOnClick=() =>{}, text}) => {
    return (
        <>
            <div>
                <button className={btnStyle} onClick={actionOnClick}> 
                    { text }
                </button>
            </div>        
        </>

    );
}

export default GeneralButton;
