import Tagtweetitem from "./Tagtweetitem";
import '/style/TagTwitter/Tagtweet.css'

const Tagtweet = () => {
    const TweetInfo = [
        {
            TypeTag: "เทคโนโลยี",
            MainTag: "#คนจนมีสิทธิ์ไหมคะ",
            ReTweet: "22K posts",
        },
        {
            TypeTag: "ได้รับความนิยมใน ไทย",
            MainTag: "#ประชุมสภา",
            ReTweet: "188K posts",
        },
        {
            TypeTag: "เทคโนโลยี",
            MainTag: "#Iphone15",
            ReTweet: "395K posts",
        },
        {
            TypeTag: "ดนตรี",
            MainTag: "#PostMaloneBKK",
            ReTweet: "1111 posts",
        },
        {
            TypeTag: "ได้รับความนิยมใน ไทย",
            MainTag: "#คุณมีไก่ผมก็มีไก่",
            ReTweet: "11K posts",
        },
        {
            TypeTag: "ได้รับความนิยมใน ไทย",
            MainTag: "#อิงล็อต",
            ReTweet: "235K posts",
        },
        {
            TypeTag: "ได้รับความนิยมใน ไทย",
            MainTag: "#Nnatawin",
            ReTweet: "235K posts",
        },
    ];
    return (
        <div id='TTD1'>
            <div id='TTD2'>
                <h2 id='TTH1'>
                    Popularity for you
                </h2>
            </div>
                {TweetInfo.map((item) => (
                    <Tagtweetitem
                        key={item.MainTag}
                        TypeTag={item.TypeTag}
                        MainTag={item.MainTag}
                        ReTweet={item.ReTweet}
                    />
                ))}
                
            <div id='TTD3'>
                <p>
                    Show more
                </p>
            </div>
        </div>
    );
}
export default Tagtweet;
