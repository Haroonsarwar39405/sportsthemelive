import { Component } from 'react'
import Img from "../Img/Beste-Gaming-Headsets-350x197.jpg";
import Img1 from '../Img/Best-Gaming-Keyboards-967x544.jpg';
import Img2 from '../Img/Best-Gaming-Mice-350x197.jpg';
import Img3 from "../Img/Header_Gaming-Desks-below-150-EN-350x197.jpg";

export default class Spcard extends Component {
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
            }
        ]
    }
  render() {
    return (
        <div className='flex w-full px-[20px]'>
            <div className='pt-[65px]'>
                <div className='bg-9 w-[90%] h-[60vh] ml-[20px] mt-[30px]'>
                </div>
                <h1 className='px-[20px] pt-[20px] text-white text-3xl w-full font-bold'>
                    Gaming Gear – The 5 best Wireless Headsets compared
                </h1>
                <p className='px-[20px] pt-[20px] text-white w-full'>
                    Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are our top 5 recommendations.
                </p>
            </div>
                <div className='flex flex-col mt-[75px]'>
                    {this.state.items.map((item) => (
                        <div key={item.id}>
                            <div className='flex'>
                                <div>
                                    <img className='w-[35vw] h-32 pt-5' src={item.imgUrl} alt="" />
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
