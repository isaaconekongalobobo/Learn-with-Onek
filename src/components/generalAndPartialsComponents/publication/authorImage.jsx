/* eslint-disable react/prop-types */
const AuthorImage = ({urlImage}) => {
    return (
        <>
            <img className="size-16  sm:size-12 rounded-full border-2 hover:border-jaune" src={urlImage} alt={"Photo de profile de l'auteur"} />
        </>
    );
}

export default AuthorImage;
