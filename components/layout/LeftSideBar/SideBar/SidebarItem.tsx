import { IconType } from "react-icons";
import '/style/LeftSideBar/Sidebaritem.css';

interface SidebarItemProps {
    label: string;
    href?: string;
    icon: IconType
    onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    href,
    icon: Icon,
    onClick
}) => {
    return (
        <div id="SBID1">
                <div id="SBID2">
                    <Icon size={25} color="black" />
                </div>

                <div id="SBID3">
                    {/* <Icon size={24} color="black"/> */}
                    <p id="SBIP1">
                        {label}
                    </p>
                </div>

        </div>
    );
}

export default SidebarItem;