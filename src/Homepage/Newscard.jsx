import { Component } from 'react'
import Img1 from "../Img/wireless-gaming-headsets-affiliates-953x544.jpg";
import Img2 from "../Img/LEC-Grand-Final-to-feature-live-audience-350x197.jpg";
import Img3 from "../Img/Beste-Gaming-Headsets-350x197.jpg";
import Img4 from "../Img/NAVI-CEO-about-war-in-Ukraine-350x197.jpg";
import Img5 from '../Img/New-VALORANT-AGent-teaser-720x405.jpg';
import Img6 from "../Img/Olaf-League-of-Legends-Splash-Art-922x544.jpg";
import Img7 from "../Img/Best-Gaming-Keyboards-967x544.jpg";
import Img8 from '../Img/New-VALORANT-AGent-teaser-720x405.jpg';

export default class Newscard extends Component {
    state = {
        items: [
            {
                id: 1,
                imgUrl: Img1,
                heading: 'Gaming Gear – The 5 best Wireless Headsets compared',
                Para:'Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are our top 5 recommendations.'
                
            },
            {
                id: 2,
                imgUrl: Img2,
                heading: 'LEC to bring back live audience for Spring Split Finals',
                Para: 'The LEC is bringing back the live audience for one series, as the competition moves closer to the Spring Split finals.'

            },
            {
                id: 3,
                imgUrl: Img3,
                heading: 'Gaming Gear – The 5 best Gaming Headsets',
                Para: 'Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are our top 5 recommendations.'

            },
            {
                id: 4,
                imgUrl: Img4,
                heading: 'How CEO Yevhen Zolotarov charts a course for NAVI through war – “It’s surreal that this happens in the 21st century.”',
                Para: 'We reached out to Natus Vinceres CEO Yevhan Zolotarov to talk about his organisations struggles and challenges amidst the War in Ukraine.'

            },
            {
                id: 5,
                imgUrl: Img5,
                heading: 'Gaming Gear – The 5 best Wireless Headsets compared',
                Para: 'Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets there are plenty to choose from. Here are our top 5 recommendations.'

            },
            {
                id: 6,
                imgUrl: Img6,
                heading: 'Riot plans mid-scope updates for both Taliyah and Olaf',
                Para: 'League of Legends developers have talked about some possible updates to Taliyah and Olaf which should be released in a couple of months.'

            },
            {
                id: 7,
                imgUrl: Img7,
                heading: 'Gaming Gear – The 5 best Gaming Keyboards',
                Para: 'Looking for a new gaming keyboard but unsure where to look? Let’s take a look at some of the top picks out there!'

            },
            {
                id: 8,
                imgUrl: Img8,
                heading: 'VALORANT blog teases newest agent',
                Para: 'We have gotten some information on the newest VALORANT agent, as Riot Games lifts the veil a little in their newest blog.'
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
        
      </div>
    )
  }
}
