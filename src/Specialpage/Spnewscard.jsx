import { Component } from 'react'
import Img from "../Img/wireless-gaming-headsets-affiliates-953x544.jpg";
import Img1 from "../Img/Beste-Gaming-Headsets-350x197.jpg";
import Img2 from '../Img/Best-Gaming-Keyboards-967x544.jpg';
import Img3 from '../Img/Best-Gaming-Mice-350x197.jpg';
import Img4 from '../Img/Header_Gaming-Desks-below-150-EN-350x197.jpg';
import Img5 from '../Img/best-SSDs-350x197.jpg';
import Img6 from "../Img/camera-affiliate-350x197.jpg";
import Img7 from "../Img/in-ear-headphones-affiliate-350x197.jpg";

export default class Spnewscard extends Component {
    state = {
        items: [
            {
                id: 1,
                imgUrl: Img,
                heading: 'Gaming Gear – The 5 best Wireless Headsets compared',
                Para: 'Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are our top 5 recommendations.'
            },
            {
                id: 2,
                imgUrl: Img1,
                heading: 'Gaming Gear – The 5 best Gaming Headsets',
                Para: '*Disclaimer: All links to other online shops are affiliate links. esports.com receives a small commission for each purchase through those links. As a customer you do not have to pay additional fees or higher prices. Thank you for your support.'
            },
            {
                id: 3,
                imgUrl: Img2,
                heading: 'Gaming Gear – The 5 best Gaming Keyboards',
                Para: 'Looking for a new gaming keyboard but unsure where to look? Let’s take a look at some of the top picks out there!'
            },
            {
                id: 4,
                imgUrl: Img3,
                heading: 'Gaming Gear – The 5 best gaming mice',
                Para: 'Looking for a new gaming mouse but unsure where to look? Let’s take a look at some of the top picks out there!'
            },
            {
                id: 5,
                imgUrl: Img4,
                heading: 'Gaming Gear – The 5 best Gaming Desks for your setup',
                Para: 'Do you need a Gaming Desk? We think that you should grab one! Here is everything you need to know about their advantages and the best models.'
            },
            {
                id: 6,
                imgUrl: Img5,
                heading: 'Gaming Gear – The 5 best SSDs for Gaming',
                Para: 'Which SSDs are the most fitting for Gamers? Here are the Top 5 for every price range and specifications you require.'
            },
            {
                id: 7,
                imgUrl: Img6,
                heading: 'Gaming Gear – The Top 5 Webcams for Gamers and Streamers',
                Para: 'Be it video chat or live streaming. Especially in the current pandemic webcams have become very useful in all kinds of situations. Here are the best webcams for gaming and streaming.'
            },
            {
                id: 8,
                imgUrl: Img7,
                heading: ' The best In-Ear Headphones for Gaming',
                Para: 'Many players prefer in-ear headphones to full headsets. Here are some of our recommendations if you are thinking of purchasing one for gaming.'
            },

        ]
    }

  render() {
    return (
        <div className='py-[20px]'>
            <div className='grid grid-cols-4 gap-5  pt-[50px] px-[50px] py-[30px]'>
                {this.state.items.map((item) => (
                    <div key={item.id} className='p-4'>
                        <img className='w-full' src={item.imgUrl} alt="" />
                        <p className='pt-3 text-white font-semibold'>{item.heading}</p>
                        <h2 className='pt-3 text-white'>{item.Para}</h2>
                    </div>
                ))}
            </div>
            <button className='w-48 h-10 bg-[#FFD129] font-semibold ml-[520px]'>
                Show more news
            </button>

            <button className='w-48 h-10 bg-[#FFD129] font-bold ml-[920px]'>
                ROCKET JUMP
            </button>

        </div>
    )
  }
}
