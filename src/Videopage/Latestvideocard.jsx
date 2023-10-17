import { Component } from 'react'
import Img16 from "../Img/spunJ-350x197.jpg";
import Img17 from "../Img/yekindar-350x194.jpg";
import Img18 from "../Img/semmler-small2-330x197.png";
import Img19 from "../Img/EU-versus-NA-in-VALORANT-Featured-350x197.jpg";
import Img20 from "../Img/How-Twitch-became-the-biggest-streaming-platform-323x197.jpg";
import Img21 from "../Img/The-competitive-history-of-mirage-350x197.jpg";
import Img22 from "../Img/How-VALORANT-is-taking-over-the-competitive-FPS-scene-350x197.jpg";
import Img23 from "../Img/How-100-Thieves-became-one-of-the-best-teams-in-the-LCS-350x197.jpg";
export default class Latestvideocard extends Component {
    state = {
        items: [
            {
                id: 16,
                imgUrl: Img16,
                heading: 'PGL Major Interview with SPUNJ- “People on Reddit do a Great Job',
                Para: 'We have gotten some information on the newest VALORANT agent, as Riot Games lifts the veil a little in their newest blog.'
            },
            {
                id: 17,
                imgUrl: Img17,
                heading: 'PGL Major Interview with YEKINDAR- “I don’t push anyone to play the same like me',
                Para: 'We have gotten some information on the newest VALORANT agent, as Riot Games lifts the veil a little in their newest blog.'
            },
            {
                id: 18,
                imgUrl: Img18,
                heading: 'PGL Major Interview with Semmler – “Its not fun to travel anymore”',
                Para: 'We have gotten some information on the newest VALORANT agent, as Riot Games lifts the veil a little in their newest blog.'
            },
            {
                id: 19,
                imgUrl: Img19,
                heading: 'VIDEO – A brief timeline of EU versus NA in VALORANT',
                Para: 'We have gotten some information on the newest VALORANT agent, as Riot Games lifts the veil a little in their newest blog.'
            },
            {
                id: 20,
                imgUrl: Img20,
                heading: 'VIDEO: 3 Of the biggest scandals on twitch ever',
                Para: 'We have gotten some information on the newest VALORANT agent, as Riot Games lifts the veil a little in their newest blog.'
            },
            {
                id: 21,
                imgUrl: Img21,
                heading: 'VALORANT blog teases newest agent',
                Para: 'We have gotten some information on the newest VALORANT agent, as Riot Games lifts the veil a little in their newest blog.'
            },
            {
                id: 22,
                imgUrl: Img22,
                heading: 'How VALORANT is taking over the competitive FPS scene',
                Para: 'We have gotten some information on the newest VALORANT agent, as Riot Games lifts the veil a little in their newest blog.'
            },
            {
                id: 23,
                imgUrl: Img23,
                heading: ' How 100 Thieves became one of the best teams in the LCS',
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

            <button className='w-48 h-10 bg-[#FFD129] font-bold ml-[920px]'>
                ROCKET JUMP
            </button>

        </div>
    )
  }
}
