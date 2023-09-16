import Followbaritem from './Followbaritem';
import '@/style/FollowBar/Followbar.css';

const Followbar = () => {
    const DataPerson = [
        {
            PURL: "https://i.pinimg.com/236x/e7/e8/69/e7e869775a39e0b4b118f3c85796843f.jpg",
            Username: "Tossukud",
            UserTag: "@BoyPakarung",
        },
        {
            PURL: "https://i.pinimg.com/564x/6c/28/01/6c28013824636ee00e582de4305dc578.jpg",
            Username: "Sad so bad",
            UserTag: "@MeowX",
        },
        {
            PURL: "https://i.pinimg.com/564x/39/a5/63/39a5633dff162bb0aa2d08fbe7644e0f.jpg",
            Username: "Setempber",
            UserTag: "@ShinE",
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
                {DataPerson.map((item) => (
                    <Followbaritem
                        key={item.Username}
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
export default Followbar;