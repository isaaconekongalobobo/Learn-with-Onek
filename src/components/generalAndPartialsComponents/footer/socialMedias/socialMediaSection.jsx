import { Link } from "react-router-dom";
import Instagram from "./medias/instagram";
import LinkedIn from "./medias/linkedIn";
import Twitter from "./medias/twitter";
import GitHub from "./medias/gitHub";
const style = "size-7"
const SocialMediaSection = () => {
    return (
        <div className="w-1/4 flex items-center justify-center gap-4 mt-5 sm:pt-4">
            <Link to="" >
                <Instagram color="green" style={style}/>
            </Link>
            <Link to="" >
                <LinkedIn color="green" style={style}/>
            </Link>
            <Link to="" >
                <Twitter color="green" style={style}/>
            </Link>
            <Link to="" >
                <GitHub color="green" style={style}/>
            </Link>
        </div>
    );
}

export default SocialMediaSection;
