/* eslint-disable react/prop-types */
const AuthorImage = ({urlImage}) => {
    return (
        <>
            <img src={urlImage} alt={"Photo de profile de l'auteur"} />
        </>
    );
}

export default AuthorImage;
