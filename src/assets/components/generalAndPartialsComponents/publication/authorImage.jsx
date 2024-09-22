/* eslint-disable react/prop-types */
const AuthorImage = ({urlImage}) => {
    return (
        <>
            <img className="size-16 rounded-full border-2" src={urlImage} alt={"Photo de profile de l'auteur"} />
        </>
    );
}

export default AuthorImage;
