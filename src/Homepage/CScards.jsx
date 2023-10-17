import { Component } from 'react';
import Img from "../Img/Hellraisers-suspend-operations-350x197.jpg";
import Img1 from "../Img/ESL-Pro-League-ban-Russian-teams-350x197.jpg";
import Img2 from "../Img/blast-navi-ukraine-update-350x197.jpg";
import Img3 from "../Img/simple-charity-350x197.jpg";
import Img4 from "../Img/FMojeY_WUAYC4_o-1-350x197.jpg";

export default class CScards extends Component {
    state = {
        items: [
            {
                id: 1,
                imgUrl: Img,
                heading: 'Hellraisers decide to suspend operations during war in Ukraine',
                Para: 'Esports organization Hellraisers has released a statement saying they’ll be'
            },
            {
                id: 2,
                imgUrl: Img1,
                heading: 'ESL decides to ban organizations with Russian ties (but players could still be ...',
                Para: 'Teams which have ties with the Russian government won’t be able to play in the'
            },
            {
                id: 3,
                imgUrl: Img2,
                heading: 'BLAST to exclude Russian-backed teams from tournaments',
                Para: 'Organizer BLAST has announced that for the "foreseeable future" no'
            },
            {
                id: 4,
                imgUrl: Img3,
                heading: 's1mple donating to Ukrainian military in show of solidarity',
                Para: 'As s1mple shared on his Instagram, he has donated a significant sum to his'
            },
            {
                id: 5,
                imgUrl: Img4,
                heading: 'FaZe win IEM Katowice as they sweep G2 Esports',
                Para: 'A big victory for FaZe Clan at IEM Katowice, as they win the first big CS: GO trophy'
            },
        ]
    }

    render() {
        return (
            <>
                <div className='flex  w-full  px-[20px]'>
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

                    <div className='pt-[65px]'>
                        <div className='bg-3 w-[95%] h-[60vh] ml-[20px] mt-[30px]'>
                        </div>
                        <h1 className='px-[20px] pt-[20px] text-white text-3xl w-full font-bold'>
                            Virtus Pro CS:GO players will compete under name ‘Outsiders’ in ESL Pro League
                        </h1>
                        <p className='px-[20px] pt-[20px] text-white w-full'>
                            The CS:GO players of Virtus Pro will compete in the ESL Pro League under a different name after ESL prohibits playing under VP name.
                        </p>
                    </div>
                </div>
            </>
        )
    }
}
