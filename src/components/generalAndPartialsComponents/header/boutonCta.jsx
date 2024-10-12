/* eslint-disable react/prop-types */
const defaultStyle = "bg-aliceblue p-[16px] rounded-full text-principale hover:bg-principale hover:text-white border-2 border-transparent hover:border-2 hover:border-white "
const BoutonCta  = ({btnStyle= defaultStyle}) => {
    return (
        <>
        <div>
            <a href="/inscription" className={btnStyle}>Commencer le cours</a>
        </div>
        </>
    )
}

export default BoutonCta