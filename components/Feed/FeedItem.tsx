import '@/style/Feed/Feed.css'
import IconFeed from './IconFeed';

interface FeedItemProps {
    imgU: string;
    Name: string;
    Id: string;
    Content: string;
    Pic?: string;

}
const FeedItem: React.FC<FeedItemProps> = ({
    imgU,
    Name,
    Id,
    Content,
    Pic,
}) => {
    return (
        <div id="FD1">
            <div id='FD2'>
                <img id='FIIMG1' src={imgU} />

                <div id='FD4'>
                    <div id='FD3'>
                        <h1 id='NF1'>
                            {Name}
                        </h1>
                        <p id='IDF1'>
                            {Id}
                        </p>
                    </div>
                    <p id='PFD1'>
                        {Content}
                    </p>
                    <img id='SFIIMG2' src={Pic}/>
                    <IconFeed />
                    {/* <a onClick={() => console.log("wow")}>Click here</a> */}
                </div>


            </div>

        </div>
    );
}

export default FeedItem;

