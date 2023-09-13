import Tagtweetitem from "./Tagtweetitem";


const Tagtweet = () => {
    const TweetInfo = [
        {
            PURL: "https://i.pinimg.com/236x/e7/e8/69/e7e869775a39e0b4b118f3c85796843f.jpg",
            Username: "Tossukud",
            UserTag: "@BoyPakarung",
        },

    ];
    return (
        <div id='FLB1'>
            <div id='FLB2'>
                <h2 id='FLH1'>
                    People you may know
                </h2>
            </div>
            {/* <div id='FLB3'> */}
                {TweetInfo.map((item) => (
                    <Tagtweetitem
                        PURL={item.PURL}
                        Username={item.Username}
                        UserTag={item.UserTag}
                    />
                ))}
                
            {/* </div> */}
            <div id='FLB4'>
                <p>
                    Show more
                </p>
            </div>
        </div>
    );
}
export default Tagtweet;

// แก้ map ส่ง data tweet