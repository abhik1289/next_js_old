import React from 'react';
// import imgSrc from '../../public/image/image.jpg';
function PopularNews() {
    return (<section>
        <div className="mainContent w-5/6 mx-auto  mt-14 pt-6">
            <div className="heading font-main flex justify-between py-3">
                <div className="title font-bold">
                    Popular News
                </div>
                <div className="date">
                    24/02/22
                </div>
            </div>
           <div className="news flex">
           <div className='w-6/12'>
                <div className="imageBx relative w-full h-[410px]  bg-gray-700">
                    {/* <img src={imgSrc} className='w-full' /> */}
                </div>
                {/* <image src={imgSrc} className='w-full' /> */}
            </div>
            <div className='w-6/12'>
                <div className="imageBx relative w-full h-[200px] ml-1 mb-2 bg-gray-700">

                </div>
                <div className="imageBx relative w-full h-[200px] ml-1 bg-gray-700">

                </div>
                {/* <image src={imgSrc} className='w-full' /> */}
            </div>
           </div>
        </div>
    </section>);
}

export default PopularNews;