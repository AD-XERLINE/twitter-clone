import '@/style/OtherPostsItems.css'
import { IconType, icons } from "react-icons";

interface ItemsProp{
    icon: IconType
    onClick?: () => void;
}

const OtherPostsItems: React.FC<ItemsProp> = ({
    icon: Icon,
}) => {
    return(
        <div id='OTPID2'>
            <div id="OTPID1">
                <Icon />
            </div>
            
        </div>
    );
}

export default OtherPostsItems;