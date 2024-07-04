import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
    return (<section className="bg-slate-700 pt-5 mt-6">
        <div className="mainContent w-5/6 mx-auto">
            <div className="boxes flex mb-2">
                <div className="w-3/12">
                    <div className="title font-secondary font-extrabold text-white">
                        Our categorys
                        <div className="underline w-[10%] relative h-[3px] bg-white">
                        </div>
                    </div>
                    <div className="catogeryLinks text-slate-400 font-main py-4">
                        <ul>
                            <li>Politics</li>
                            <li>Cricket</li>
                            <li>Global</li>
                            <li>News</li>
                        </ul>
                    </div>
                </div>
                <div className="w-3/12">
                    <div className="title font-secondary font-extrabold text-white">
                        Others
                        <div className="underline w-[10%] relative h-[3px] bg-white">
                        </div>
                    </div>
                    <div className="catogeryLinks text-slate-400 font-main py-4">
                        <ul>
                            <li>CEO:Willam Cot</li>
                            <li>EDITOR:DAVID ROW</li>
                            <li>WRITTER:Jelly</li>
                            <button className="border border-slate-400 px-2 py-1 mt-2">See More</button>
                        </ul>
                    </div>
                </div>
                <div className="w-3/12 bg-slate-500 rounded-lg py-2 px-3">
                    <div className="title font-secondary font-extrabold text-white">
                        Touch us
                        <div className="underline w-[10%] relative h-[3px] bg-white">
                        </div>
                    </div>
                    <div className="boxEs">
                        <form>
                            <div className="mainClm">
                                <label className="block font-secondary text-slate-700">Name</label>
                                <input type="text" className="w-full outline-none bg-slate-400 px-2 py-1 border border-slate-200" />
                            </div>
                            <div className="mainClm">
                                <label className="block font-secondary text-slate-700">Email</label>
                                <input type="text" className="w-full outline-none bg-slate-400 px-2 py-1 border border-slate-200" />
                            </div>
                            <div className="btnBx flex justify-center">
                                <button className="py-1 px-3 my-3 font-main border border-slate-700 hover:border-slate-900 transition">
                                    Get Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-3/12 pl-7">
                    <div className="title font-secondary font-extrabold text-white">
                        Social Media
                        <div className="underline w-[10%] relative h-[3px] bg-white">
                        </div>
                    </div>
                    <div className="firstClm flex">
                        <div className="box cursor-pointer hover:bg-slate-900 transition bg-slate-800 rounded-full flex justify-center
                         items-center m-2 w-[50px] h-[50px]">
                            <FacebookIcon className='text-slate-200' />
                        </div>
                        <div className="box cursor-pointer hover:bg-slate-900 transition bg-slate-800 rounded-full flex justify-center
                         items-center m-2 w-[50px] h-[50px]">
                            <TwitterIcon className='text-slate-200' />
                        </div>
                    </div>
                    <div className="firstClm flex">
                        <div className="box cursor-pointer hover:bg-slate-900 transition bg-slate-800 rounded-full flex justify-center
                         items-center m-2 w-[50px] h-[50px]">
                            <YouTubeIcon className='text-slate-200' />
                        </div>
                        <div className="box cursor-pointer hover:bg-slate-900 transition bg-slate-800 rounded-full flex justify-center
                         items-center m-2 w-[50px] h-[50px]">
                            <InstagramIcon className='text-slate-200' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyWrightBx py-4 font-secondary text-slate-50 text-center border-t border-t-slate-200">
            Copyright@2021. All rights reserved
            </div>
        </div>
    </section>);
}

export default Footer;