/* eslint-disable react/prop-types */
const PublicationDetails = ({publicationId,likes, setLikes, comments, setComments, shares, setShares}) => {
    return (
        <>
            <div key={publicationId}> 
                <div>
                    <img src="" alt="Nombre des likes" onClick={setLikes} />
                    <span> {likes} </span>
                </div>
                <div>
                    <img src="" alt="Nombre des commentaires" onClick={setComments} />
                    <span> {comments} </span>
                </div>
                <div>
                    <img src="" alt="Nombre des partages" onClick={shares} />
                    <span> {setShares} </span>
                </div>
            </div>
        </>
    );
}

export default PublicationDetails;
