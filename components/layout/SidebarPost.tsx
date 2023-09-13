'use client'

import { useRouter } from "next/navigation";
import '/style/SidebarPost.css';
import { FaFeather } from "react-icons/fa";

const SidebarPost = () => {
    const router = useRouter();

    return (
        <div onClick={() => router.push('/')}>
            <div id="SBP1">
                <FaFeather size={24} color="white" />
            </div>
            <div id="SBP2">
                <p id="SBPH1">
                    POST
                </p>
            </div>
        </div>
    );
}

export default SidebarPost;