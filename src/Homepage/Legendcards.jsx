import { Component } from 'react';
import Img from "../Img/Doublelift-on-NA-servers-and-ping-issues-350x197.jpg";
import Img1 from "../Img/Best-season-12-mid-laners-350x197.jpg";
import Img2 from "../Img/TSM-Not-in-playoffs-LCS-2022-350x197.jpg";
import Img3 from "../Img/TSMFTXmain-350x197.jpg";
import Img4 from "../Img/Tryndamere-Barbarian-King-Skin-334x197.jpg";

export default class Legendcards extends Component {
    state = {
        items: [
            {
                id: 1,
                imgUrl: Img,
                heading: 'Doublelift calls out LCS players who don’t use Champions Queue to',
                Para: 'Former LCS bot laner Doublelift has called out LCS players for not using'
            },
            {
                id: 2,
                imgUrl: Img1,
                heading: 'The 5 best midlaners for season 12 solo queue',
                Para: 'After covering toplane and jungle, we have arrived at the most central role in the'
            },
            {
                id: 3,
                imgUrl: Img2,
                heading: 'TSM miss out on LCS playoffs for the first time in franchise history',
                Para: 'It certainly hasn’t been the split TSM had been hoping for in the LCS, as they’ve'
            },
            {
                id: 4,
                imgUrl: Img3,
                heading: 'Update: Peter Zhang provides a statement following being fired',
                Para: 'Former TSM coach Peter Zhang has posted a statement after being fired'
            },
            {
                id: 5,
                imgUrl: Img4,
                heading: 'Tryndamere to get nerfed in the newest League of Legends',
                Para: 'The newest League of Legends Patch 12.06 is hitting the rift soon, as the developers look to tackle'
            },
        ]
    }

    render() {
        return (
            <div className='flex w-full px-[20px]'>
                <div className='pt-[65px]'>
                    <div className='bg-2 w-[95%] h-[60vh] ml-[20px] mt-[30px]'>
                    </div>
                    <h1 className='px-[20px] pt-[20px] text-white text-3xl w-full font-bold'>
                        Riot plans mid-scope updates for both Taliyah and Olaf
                    </h1>
                    <p className='px-[20px] pt-[20px] text-white w-full'>
                        League of Legends developers have talked about some possible updates to Taliyah and Olaf which should be released in a couple of months.
                    </p>
                </div>
                <div className='flex flex-col mt-[75px]'>
                    {this.state.items.map((item) => (
                        <div key={item.id}>
                            <div className='flex'>
                                <div>
                                    <img className='w-[25vw] h-32 pt-5' src={item.imgUrl} alt="" />
                                </div>
                                <div className="ml-3">
                                    <h1 className='text-white font-semibold w-64 px-5 pt-5'>{item.heading}</h1>
                                    <p className='text-white text-[13px] w-60 px-5'>{item.Para}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

