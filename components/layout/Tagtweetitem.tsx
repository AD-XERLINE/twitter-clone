import TagTweetMore from "./TagTweetMore";

interface TagTweetProps {
    PURL: string;
    Username: string;
    UserTag: string;
}

const Tagtweetitem: React.FC<TagTweetProps> = ({
    PURL,
    Username,
    UserTag
}) => {
    return (
        <div id='FLBI1'>
            <img src={PURL}></img>
            <div id='FLBID1'>
                <div id='FLBID2'>
                    <h3>
                        {Username}
                    </h3>
                    <p>
                        {UserTag}
                    </p>
                </div>
                <div id='FLBID3'>
                    <TagTweetMore />
                </div>
            </div>
        </div>
    );
}

export default Tagtweetitem;