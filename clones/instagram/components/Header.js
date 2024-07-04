import Image from "next/image";
import ImageScr from "../public/images/heroLogo.png";
import profileImg from "../public/images/profile.jpg";
import SmallprofileImg from "../public/favicon.png";
import Popup from 'reactjs-popup';
import { SearchIcon, HomeIcon, ChatIcon, PlusCircleIcon, ArrowsExpandIcon, HeartIcon, BookmarkIcon, UserCircleIcon, CogIcon, LogoutIcon, ColorSwatchIcon } from '@heroicons/react/outline';
import Link from "next/link";
import { useRouter } from "next/router";
function Header() {
    const router = useRouter();
    return (<section>
        <div className="py-2 border w-screen fixed top-0 left-0 z-10 bg-slate-50">
            <div className="flex justify-between items-center mx-auto 2xl:w-4/5 lg:w-11/12">
                {/* Left part */}
                <Link href="/">
                    <div className="imageBx hidden sm:block cursor-pointer">
                        <Image

                            objectFit="cover"
                            width={30}
                            height={30}
                            src={SmallprofileImg}
                        />
                    </div>
                </Link>
                <Link href="/">

                    <div className="imageBx sm:hidden block cursor-pointer">
                        <Image
                            src={ImageScr}
                        />
                    </div>

                </Link>
                {/* middle part */}
                <label class="relative block md:hidden">
                    <span class="sr-only">Search</span>
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <SearchIcon className="h-5 w-5 text-slate-700" />
                    </span>
                    <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search" type="text" name="search" />
                </label>
                {/* rigth part */}
                <div className="leftpart flex justify-between w-3/12 md:w-8/12  items-center">

                    <Link href="/">
                        <div className="iconButton">
                            <HomeIcon className={router.pathname == "/" ? "w-6 h-6 cursor-pointer text-slate-900 transition duration-500 ease-in-out" : "w-6 h-6 cursor-pointer text-slate-700"} />
                        </div>
                    </Link>
                    <div className="iconButton hidden md:block cursor-pointer">
                        <SearchIcon className="h-5 w-5 text-slate-700" />

                    </div>
                    <div className="iconButton">
                        <ChatIcon className="w-6 h-6  cursor-pointer text-slate-700"></ChatIcon>
                    </div>
                    <div className="iconButton">
                        <PlusCircleIcon className="w-6 h-6 cursor-pointer  text-slate-700"></PlusCircleIcon>
                    </div>
                    <div className="iconButton">
                        <ArrowsExpandIcon className="w-6 h-6 cursor-pointer  text-slate-700"></ArrowsExpandIcon>
                    </div>
                    <div className="iconButton">
                        <HeartIcon className="w-6 h-6  cursor-pointer text-slate-700"></HeartIcon>
                    </div>
                    <div className="iconButton">
                        <div className="circleIcon w-8 h-8 rounded-full cursor-pointer relative overflow-hidden bg-gray-900">
                            <Popup

                                trigger={<button>  <Image
                                    src={profileImg}
                                    className="absolute w-full  rounded-full"
                                /></button>} position="bottom center">
                                <div className="shadow-md py-2 px-3 -mt-5 rounded bg-slate-50 md:mr-4">
                                    <ul>
                                        <Link href="/Profile">
                                            <li className="flex items-center capitalize font-mainFont cursor-pointer text-slate-600 hover:text-slate-800 transition py-1 ">
                                                <UserCircleIcon
                                                    className="h-4 w-4"
                                                />
                                                <div className="text pl-2">
                                                    profile
                                                </div>
                                            </li>
                                        </Link>
                                        <li className=" py-1 flex items-center capitalize font-mainFont cursor-pointer text-slate-600 hover:text-slate-800 transition"><BookmarkIcon
                                            className="h-4 w-4"  />
                                            <div className="text pl-2">
                                                saved
                                            </div>
                                        </li>
                                        <li className=" py-1 flex items-center capitalize font-mainFont cursor-pointer text-slate-600 hover:text-slate-800 transition"><CogIcon
                                            className="h-4 w-4" />
                                            <div className="text pl-2">
                                                Settings
                                            </div>
                                        </li>
                                        <li className=" py-1 flex items-center capitalize font-mainFont cursor-pointer text-slate-600 hover:text-slate-800 transition"><ColorSwatchIcon
                                            className="h-4 w-4"/>
                                            <div className="text pl-2">
                                                Swich Account
                                            </div>
                                        </li>
                                        <hr className="" />
                                        <li className=" py-1 flex items-center capitalize font-mainFont cursor-pointer text-slate-600 hover:text-slate-800 transition"><LogoutIcon
                                            className="h-4 w-4"/>
                                            <div className="text pl-2">
                                                log out
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Popup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}

export default Header;