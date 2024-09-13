/* eslint-disable react/prop-types */
const Icone = (props) => {
    return (
        <>
            <img src={props.source} alt={props.description} className="size-20 sm:size-full  sm:w-full sm:rounded-[12px] sm:object-cover" />
        </>
    )
}

export default Icone