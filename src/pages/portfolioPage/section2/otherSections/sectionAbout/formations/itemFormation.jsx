/* eslint-disable react/prop-types */
const ItemFormation = ({text, moreDetails}) => {
    return (
        <>
            <li>
                <div className="bg-[#7ED218] p-5 text-[#1B4D3E] ">
                    <h5 className="font-medium"> {text} </h5>
                    <p className="text-sm"> {moreDetails} </p>
                </div>
            </li>
        </>
    )
}

export default ItemFormation;
