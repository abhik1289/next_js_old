// import { useState } from "react";
import profileImg from "../public/images/profile.jpg";
import postView from "../public/images/postView.jpg";
import Image from "next/image";
import { DotsHorizontalIcon, HeartIcon, ChatIcon, TrendingUpIcon, BookmarkIcon, EmojiHappyIcon } from "@heroicons/react/outline";
function Post() {
    return (<section className="my-2">
        <div className="pt-2 border rounded">
            <div className="header_port flex p-2 justify-between items-center my-2">
                <div className="describtion flex items-center">
                    <div className="logo ">
                        <div className="ImageBx relative w-10 h-10 border rounded-full overflow-hidden
                    ">
                            <Image
                                src={profileImg} className="w-full rounded-full absolute top-0 "
                            ></Image>
                        </div>
                    </div>
                    <div className="name font-mainFont pl-4">
                        Abhik Patra
                    </div>
                </div>
                <div className="button">
                    <DotsHorizontalIcon className="h-5 w-5 text-slate-700 cursor-pointer" />
                </div>
            </div>
            <div className="mainpost relative w-full">
                <Image
                    src={postView} objectFit="cover"
                />
            </div>
            <div className="recationBar flex justify-between px-2 py-1">
                <div className="mainReaction flex  w-3/12 justify-between">
                    <div className="itembtn">
                        <HeartIcon className="h-8 w-8 text-slate-600 cursor-pointer" />
                    </div>
                    <div className="itembtn">
                        <ChatIcon className="h-8 w-8 text-slate-600 cursor-pointer" />
                    </div>
                    <div className="itembtn">
                        <TrendingUpIcon className="h-8 w-8 text-slate-600 cursor-pointer" />
                    </div>
                </div>
                <div className="savePostBtn">
                    <BookmarkIcon className="h-8 w-8 text-slate-600 cursor-pointer"></BookmarkIcon>
                    
                </div>
            </div>
            <div className="like flex items-center">
                <div className="imagesBx bg-gray-900 w-5 h-5 rounded-full mr-1 overflow-hidden">
                    <Image src={profileImg} objectFit="cover" />
                </div>
                <div className="text font-sans text-slate-700">
                    Liked by
                    dhoniraina
                    and
                    387,238 others
                </div>

            </div>
            <div className="post_describtion font-mainFont py-2">
                Let's face it: most UIs you see online are fake 👀
                <button className="font-sans text-blue-700">Show More</button>
            </div>
            <div className="comment">
                <label class="relative block">
                    <span class="sr-only">Search</span>
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                        <EmojiHappyIcon className="h-5 w-5 cursor-pointer text-slate-700" />
                    </span>
                    <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border-t outline-none py-2 pl-9 pr-3 shadow-sm focus:outline-none  sm:text-sm" placeholder="Comment" type="text" name="search" />
                </label>

            </div>
        </div>
    </section>);
}

export default Post;