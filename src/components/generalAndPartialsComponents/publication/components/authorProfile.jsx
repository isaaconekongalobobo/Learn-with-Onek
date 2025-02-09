/* eslint-disable react/prop-types */
const AuthorProfile = ({url = 'https://res.cloudinary.com/do2qnb4zc/image/upload/v1718012274/samples/smile.jpg'}) => {
    return (
        <div className="bg-center bg-cover size-12 rounded-full" style={{ backgroundImage: `url(${url})`}}/>
    );
}

export default AuthorProfile;
