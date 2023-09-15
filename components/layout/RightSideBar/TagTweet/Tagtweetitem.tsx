import TagTweetMore from "./TagTweetMore";
import '/style/TagTwitter/Tagtweetitem.css'

interface TagTweetProps {
    TypeTag: string,
    MainTag: string,
    ReTweet: string,
}

const Tagtweetitem: React.FC<TagTweetProps> = ({
    TypeTag,
    MainTag,
    ReTweet
}) => {
    return (
        <div id='TTID1'>
            <div id='TTID2'>
                <div id='TTID3'>
                    <p id="TTP1">
                        {TypeTag}
                    </p>
                    <h3 id="TTIH1">
                        {MainTag}
                    </h3>
                    <p id="TTP1">
                        {ReTweet}
                    </p>
                </div>
                <div id='TTID4'>
                    <TagTweetMore />
                </div>
            </div>
        </div>
    );
}

export default Tagtweetitem;