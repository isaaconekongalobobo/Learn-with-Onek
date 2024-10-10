import CommentsIcon from "../../icons/commentsIcon";
import LikeIcon from "../../icons/likeIcon";
import ShareIcon from "../../icons/shareIcon";

/* eslint-disable react/prop-types */
const PublicationDetails = ({likes, setLikes, comments, setComments, shares, setShares}) => {
    return (
        <>
            <div className="flex justify-center items-center gap-8"> 
                {/* J'importe le composant LikeIcon pour afficher l'icone des likes */}
                <LikeIcon likes={likes} setLikes={setLikes} />
                <div className="flex items-center gap-2">
                    <CommentsIcon setComments={setComments}/>
                    <span> {comments} </span>
                </div>
                <div className="flex items-center gap-2">
                    <ShareIcon setShares={setShares} />
                    <span> {shares} </span>
                </div>
            </div>
        </>
    );
}

export default PublicationDetails;
