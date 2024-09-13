/* eslint-disable react/prop-types */
const Onglet  = (props) => {
    return (
        <>
            <li>
                <a href={props.ancre}> {props.nom} {props.barre} </a>
            </li>
        </>
    )
}

export default Onglet