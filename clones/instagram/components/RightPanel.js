import Image from "next/image";
import profileImg from "../public/images/profile.jpg";
import FollowerSuggestion from "./FollowerSuggestion";

function RightPanel() {
    return (<>
        <div className="mainBx py-2 sticky">
            <div className="profileBx flex items-center py-2 my-2 w-full">
                <div className="imageBx w-16 h-16 bg-slate-500 rounded-full overflow-hidden">
                    <Image
                        src={profileImg} objectFit="cover"
                    />
                </div>
                <div className="name ml-4">
                    <div className="username font-medium">
                        patrajr.abhik
                    </div>
                    <div className="name font-mainFont">
                        Abhik Patra
                    </div>
                </div>
            </div>
            <FollowerSuggestion/>
        </div>

    </>);
}

export default RightPanel;