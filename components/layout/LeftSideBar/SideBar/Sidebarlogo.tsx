'use client'

import { useRouter } from "next/navigation";
import { BsTwitter} from "react-icons/bs";
import '/style/LeftSideBar/Sidebarlogo.css';

const Sidebarlogo = () => {
    const router = useRouter()

    return (
        
        <div id="SBLG1" onClick={() => router.push('/')} >
            <BsTwitter size={28} color='black'/>
        </div>
    );
}

export default Sidebarlogo;