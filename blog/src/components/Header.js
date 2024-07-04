import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
function Header() {
    return (<section className='w-screen py-2 shadow-md fixed z-10 top-0 left-0 bg-white'>
        <div className='main w-5/6 mx-auto flex justify-between'>
            <div className="logo text-2xl font-logo text-gray-800">
                Blog App
            </div>
            <div className="serachBar w-5/12 relative">
                <div className="serachBtn absolute flex items-center h-full left-1 fill-slate-600">
                    <button>
<SearchIcon className='text-slate-600
'/>
                    </button>
                </div>
                <input type="text" className="w-full outline-none border border-gray-300 pl-8 py-3 focus:border-blue-400 font-main rounded-sm" />
            </div>
            <div className="menuBx">
                <ul className='flex'>
                    <li className='py-2 px-5 text-slate-500  transition-all duration-500 ease-linear font-main cursor-pointer hover:text-slate-900'>Home</li>
                    <li className='py-2 px-5 text-slate-500  transition-all duration-500 ease-linear font-main cursor-pointer hover:text-slate-900'>Trending</li>
                    <li className='py-2 px-5 text-slate-500  transition-all duration-500 ease-linear font-main cursor-pointer hover:text-slate-900'>Profile</li>
                    <li className='py-2 px-5 text-slate-500  transition-all duration-500 ease-linear font-main cursor-pointer hover:text-slate-900'>Others</li>
                </ul>
            </div>
        </div>
    </section>);
}

export default Header;