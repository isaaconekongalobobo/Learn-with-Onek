import CommentsIcon from "../../icons/commentsIcon";
import LikeIcon from "../../icons/likeIcon";

/* eslint-disable react/prop-types */
const PublicationDetails = ({ likes, setLikes, comments, setComments }) => {
    return (
        <>
            <div className="flex justify-center items-center gap-5"> 
                <LikeIcon likes={likes} setLikes={setLikes} />
                <div className="flex gap-1 relative top-1 items-center">
                    <CommentsIcon setComments={setComments}/>
                    <span> {comments} </span>
                </div>
            </div>
        </>
    );
}

export default PublicationDetails;
