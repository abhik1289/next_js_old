import Image from "next/image";
import profileImg from "../public/images/profile.jpg";

function FollowerSuggestion() {
    return (<>
    <div className="main py-2 px-1 w-full">
<div className="headerPart flex justify-between">
                <div className="lefeText font-mainFont font-semibold">
                    Suggestion for you
                </div>
                <div className="font-mono">
                    See All
                </div>
</div>
<div className="newFollers flex my-3 justify-between items-center">
    <div className="leftBx flex items-center">
                    <div className="image w-10 h-10 overflow-hidden rounded-full">
                        <Image
                            src={profileImg}
                        />
                    </div>
                    <div className="describtiopn ml-3">
                        <div className="username font-medium">
                            koushikpatra414
                        </div>
                        <div className="status font-mainFont">
                            New to Instagram
                        </div>

                    </div>
    </div>
                <div className="fol_Btn font-mainFont text-blue-600 cursor-pointer">
                    Follow
                </div>
</div>
    </div>
    </>);
}

export default FollowerSuggestion;