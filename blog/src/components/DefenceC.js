import imgSrc from '../image/image.jpg';

function DefencePost() {
    return (<>
        <section className="w-5/6 mx-auto my-2">
            <div className="main">
                <div className="heading font-main flex justify-between items-center py-3">
                    <div className="title font-bold">
                        Defence News
                    </div>
                    <div className="date">
                        <button className="bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
                            See All
                        </button>
                    </div>
                </div>
                <div className="news flex">
                    <div className="w-4/12 newsBx border border-slate-300 my-3 cursor-pointer hover:border-slate-400">
                        <div className="imgeBx">
                            <img src={imgSrc} alt="" />
                        </div>
                        <div className="title font-secondary text-xl">
                            Border News:Indian Army kill 10 pakistani army
                        </div>
                        <div className="text font-main">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique sunt aperiam neque error modi quos, ad explicabo. Quo similique vero nostrum excepturi corrupti, sapiente a quos enim quis officia eos.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default DefencePost;