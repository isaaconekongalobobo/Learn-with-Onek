import { useState } from "react";
import AuthorImage from "./authorImage";
import PublicationDetails from "./publicationdetails/publicationDetails";
import PublicationImage from "./publicationImage";

const Publication = (publicationInfo, setPublicationInfo) => {
    // Je creer des hook pour modifier les informations d'une publication
    const [likes] = useState(publicationInfo.likes)
    return (
        <>
            <div>
                <div>
                    <AuthorImage urlImage={publicationInfo.authorImage} />
                    <h2> {publicationInfo.firstName} {publicationInfo.name} </h2>
                    <div>
                        <p> {publicationInfo.publicationdate} </p>
                    </div>                    
                </div>
                <div>
                    <PublicationImage urlImage={publicationInfo.pubImage} />
                </div>
                <PublicationDetails 
                    publicationId={publicationInfo.id} 
                    likes={likes}
                    setLikes={setPublicationInfo}
                    comments=""
                    setComments=""
                    shares=""
                    setShares=""
                />
            </div>
        </>
    );
}

export default Publication;
