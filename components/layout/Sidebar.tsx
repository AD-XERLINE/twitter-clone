import {BsBell, BsBookmark, BsCardList, BsChatSquareText, BsCheck2Square, BsFillHouseDoorFill, BsHouseHeartFill, BsPerson, BsSearch, BsThreeDots } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import {BiLogOut} from 'react-icons/bi'

import Sidebarlogo from './Sidebarlogo';
import SidebarItem from './SidebarItem';
import '/style/Sidebar.css';
import SidebarPost from './SidebarPost';
// import SidebarTweetButton from './SidebarTweetButton';

const Sidebar = () => {
    const items = [
        {
            label: 'Home',
            href: '/',
            icon: BsHouseHeartFill
        },

        {
            label: 'Expore',
            href: '/',
            icon: BsSearch
        },

        {
            label: 'Notifications',
            href: '/Notifications',
            icon: BsBell
        },

        {
            label: 'Message',
            href: '/',
            icon: BsChatSquareText
        },

        {
            label: 'Member',
            href: '/',
            icon: BsCardList
        },

        {
            label: 'Bookmark',
            href: '/',
            icon: BsBookmark
        },

        {
            label: 'Verify',
            href: '/',
            icon: BsCheck2Square
            // BsUnlock
        },

        {
            label: 'Profile',
            href: '/users/123',
            icon: BsPerson
        },

        {
            label: 'More',
            href: '/',
            icon: BsThreeDots
        },

    ];
    return (
        <div id='D1' > 
            <div id='D2'>
                <div id='D3'>
                    <Sidebarlogo />
                    {items.map((item) => (
                        <SidebarItem
                            key={item.href}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                        />
                    ))}
                    {/* <SidebarItem onClick={() => {}} icon={BiLogOut} label='Logout'/> */}
                    <SidebarPost />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;