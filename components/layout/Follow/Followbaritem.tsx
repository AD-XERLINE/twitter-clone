import FollowButton from './FollowButton';
import '/style/FollowBar/Followbaritem.css'

interface FollowbaritemProps {
    PURL: string;
    Username: string;
    UserTag: string;
}

const Followbaritem: React.FC<FollowbaritemProps> = ({
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
                    <FollowButton />
                </div>
            </div>
        </div>
    );
}

export default Followbaritem;