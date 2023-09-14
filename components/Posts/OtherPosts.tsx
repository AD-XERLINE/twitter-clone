import { BsCalendar2Date, BsCardImage, BsEmojiSmile, BsFiletypeGif, BsListTask } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import OtherPostsItems from "./OtherPostsItems";
import '@/style/OtherPosts.css'

const OtherPosts = () => {
    const items = [
        {
            Icon: BsCardImage
        },
        {
            Icon: BsFiletypeGif
        },
        {
            Icon: BsListTask
        },
        {
            Icon: BsEmojiSmile
        },
        {
            Icon: BsCalendar2Date
        },
        {
            Icon: FaMapMarkerAlt
        },
    ];
    return (
        <div id="OTPD1">
            <div id="OTP1">
                {items.map((item) => (
                    <OtherPostsItems
                        icon={item.Icon}
                    />
                ))}
            </div>

        </div>
    );
}

export default OtherPosts;