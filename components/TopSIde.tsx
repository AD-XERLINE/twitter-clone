'use client'

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";
import '/style/TopSide.css'

interface TopSide {
    showBackArrow?: boolean;
    label: string;
}

const TopSide: React.FC<TopSide> = ({ showBackArrow, label }) => {
    const router = useRouter();

    const handleBack = useCallback(() => {
        router.back();
    }, [router]);

    return (
        <div id="TSD1">
            <div id="TSD2">
                {showBackArrow && (
                    <BiArrowBack id="TSIC1" onClick={handleBack} color="black" size={20} />
                )}
                <h1 id="TSH1">
                    {label}
                </h1>
            </div>
        </div>
    );
}

export default TopSide;