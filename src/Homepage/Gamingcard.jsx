import { Component } from 'react'
import Img from "../Img/Best-Gaming-Mice-350x197.jpg";
import Img1 from "../Img/Activision-Blizzard-lay-off-50-people-restructure-live-events-350x197.jpg";
import Img2 from "../Img/GenShin-Impact-Guide-to-Freedom-How-To-Get-350x197.jpg";
import Img3 from "../Img/New-Witcher-game-in-development-350x197.jpg";
import Img4 from "../Img/How-Twitch-became-the-biggest-streaming-platform-323x197.jpg";

export default class Gamingcard extends Component {
    state = {
        items: [
            {
                id: 1,
                imgUrl: Img,
                heading: 'Gaming Gear – The 5 best gaming mice',
                Para: 'Looking for a new gaming mouse but unsure where to look? Let’s take a look at some of the top picks out there!'
            },
            {
                id: 2,
                imgUrl: Img1,
                heading: 'New lawsuit for Activision Blizzard as female employee alleges sexual harassment',
                Para: 'Things seemingly keep getting worse for Activision Blizzard, as another employee has now sued them for sexual harassment and discrimination.'
            },
            {
                id: 3,
                imgUrl: Img2,
                heading: 'Getting Guide to Freedom in Genshin Impact',
                Para: 'Looking to level up your characters and in need of Guide of Freedom? Let’s take a look at what needs to be done.'
            },
            {
                id: 4,
                imgUrl: Img3,
                heading: 'CD Projekt Red announces new Witcher game is being developed',
                Para: 'CD Projekt Red has announced that they’re working on a new game in the Witcher series, entering a new era for the franchise.'
            },
            {
                id: 5,
                imgUrl: Img4,
                heading: 'History of Twitch – How Twitch became the most popular streaming platform',
                Para: 'Twitch provides an easy to access but equally easy to start on platform for anyone that wants to see or produce their own gaming content.'
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
                                        <img className='w-[20vw] h-32 pt-5' src={item.imgUrl} alt="" />
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
                        <div className='bg-7 w-[95%] h-[60vh] ml-[20px] mt-[30px]'>
                        </div>
                        <h1 className='px-[20px] pt-[20px] text-white text-3xl w-full font-bold'>
                        Gaming Gear – The 5 best Gaming Keyboards
                        </h1>
                        <p className='px-[20px] pt-[20px] text-white w-full'>
                        Looking for a new gaming keyboard but unsure where to look? Let’s take a look at some of the top picks out there!
                        </p>
                    </div>
                </div>
            </>
        )
    }
}
