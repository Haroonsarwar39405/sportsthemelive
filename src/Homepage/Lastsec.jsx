import { Component } from 'react'
import icon from "../Img/ESL-icon-klein-dunkelgrau.jpg";
import icon1 from "../Img/Uni-icon-klein-dunkelgrau.jpg";

export default class Lastsec extends Component {
    render() {
        return (
            <div className='w-full  bg-[#1A1A1A]'>
                <div className='flex justify-evenly pt-[30px]'>
                    <ul className='text-white'>
                        <h1 className='text-[#333333]'>Games
                        </h1>
                        <li className='pt-[20px]'>League of Legends</li>
                        <li className='pt-3'>CS:GO</li>
                        <li className='pt-3'>VALORANT</li>
                        <li className='pt-3'>DOTA 2</li>
                        <li className='pt-3'>Call of Duty</li>
                        <li className='pt-3'>Pokemon</li>
                        <li className='pt-3'>Gaming</li>

                    </ul>
                    <ul className='text-white'>
                        <h1 className='text-[#333333]'>
                            Guides
                        </h1>
                        <li className='pt-[20px]'>League of Legends Guides</li>
                        <li className='pt-3'>CS:GO Guides</li>
                        <li className='pt-3'>Dota2 Guides</li>
                        <li className='pt-3'>Call of Duty Guides</li>
                        <li className='pt-3'>Pokemon Guides</li>
                    </ul>
                    <ul className='text-white'>
                        <h1 className='text-[#333333]'>
                            News
                        </h1>
                        <li className='pt-[20px]'>League of Legends News</li>
                        <li className='pt-3'>CS:GO News</li>
                        <li className='pt-3'>Dota2 News</li>
                        <li className='pt-3'>Call of Duty News</li>
                        <li className='pt-3'>Pokemon News</li>
                        <li className='pt-3'>Fifa News</li>
                    </ul>
                </div>
                <div className='pt-[50px] flex justify-between px-[180px]'>
                    <ul className='text-white'>
                        <h1 className='text-[#333333]'>
                            Patchnotes
                        </h1>
                        <li className='pt-[20px]'>League of Legends Patchnotes</li>
                        <li className='pt-3'>CS:GO Patchnotes</li>
                        <li className='pt-3'>Dota2 Patchnotes</li>
                        <li className='pt-3'>Call of Duty Patchnotes</li>
                    </ul>
                    <ul className='text-white'>
                        <h1 className='text-[#333333]'>
                            More
                        </h1>
                        <li className='pt-[20px]'>Special Deals</li>
                        <li className='pt-3'>Gaming News</li>
                        <li className='pt-3'>Entertainment</li>
                        <li className='pt-3'>Videos</li>
                    </ul>
                </div>
                <div className='hrdiv2'>
                </div>
                <div className='flex justify-evenly py-[30px]'>
                    <div>
                        <h1 className='text-white px-[60px] pt-[40px] text-xl'>
                            Follow us
                        </h1>
                        <div className='flex ml-[50px] mt-8 gap-10'>
                            <img src="/Images/icon-facebook.svg" alt="" />
                            <img src="/Images/icon-twitch.svg" alt="" />
                            <img src="/Images/icon-instagram.svg" alt="" />
                            <img src="/Images/icon-tiktok.svg" alt="" />
                            <img src="/Images/icon-youtube.svg" alt="" />
                            <img className='w-5' src="/Images/Discord-Logo-White-SVG.svg" alt="" />
                            <img className='w-5' src="/Images/cross-white.c445173f43715aec1699.svg" alt="" />
                        </div>
                    </div>
                    <div className='flex mr-28 gap-10'>
                        <img className='w-20 mt-20' src={icon} alt="" />
                        <img className='w-20 mt-20' src={icon1} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
