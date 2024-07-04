import { ChevronRightIcon,PlusSmIcon } from "@heroicons/react/outline";
import profileImg from "../public/images/profile.jpg";
import Image from "next/image";
function Story() {
    return (<section className="">
        <div className="py-2 px-2 my-4  border rounded relative">
            <div className="stories flex">
                <div className="storyBxOwn mx-2 relative w-16 h-16 p-1">
                    <div className="iconBtn z-10 absolute p-1 bg-blue-600 rounded-full cursor-pointer" style={{right:"-05px",top:'80%',transform:'translateY(-80%)',zIndex: "1",}}>
                        <PlusSmIcon className="w-5 h-5 text-slate-200" />
                    </div>
                    <div className="ImageBx relative w-full h-full border rounded-full overflow-hidden
                    ">
                        <Image
                            src={profileImg} className="w-full rounded-full absolute top-0 "
                        ></Image>
                    </div>
                   
                  
                </div>
                <div className="storyBx">
                    
                </div>
            </div>
            <div className="nextBtn absolute right-3 p-1 cursor-pointer bg-salt-400 rounded-full shadow-md" style={{ top: "50%", transform: 'translateY(-50%)', }}>
                <ChevronRightIcon
                    className="h-5 w-5 text-slate-700"
                />
            </div>
        </div>
    </section>);
}

export default Story;