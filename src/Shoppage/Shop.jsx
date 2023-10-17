import { Component } from 'react'
import Navbar from '../Homepage/Navbar'
import Shopnav from './Shopnav'
import Esbgimg from './Esbgimg'
import Stream from './Stream'
import Logitech from './Logitech'
import Esl from './Esl'
import Specialgames from '../Homepage/Specialgames';
import Specialdealscards from '../Homepage/Specialdealscards'
import img from "../Img/Best-Gaming-Keyboards-967x544.jpg";
import img1 from "../Img/Best-Gaming-Mice-350x197.jpg";
import img2 from "../Img/Header_Gaming-Desks-below-150-EN-350x197.jpg";
import img3 from "../Img/best-SSDs-350x197.jpg";
import Featured from './Featured'
import Meta from './Meta'
import Lastsec from '../Homepage/Lastsec'
import Footer from '../Homepage/Footer'

export default class Shop extends Component {
  render() {
    return (
        <div>
            <Navbar />
            <Shopnav />
            <Esbgimg />
            <Stream />
            <Logitech />
            <Esl />
            <Specialgames />
            
            <div className='pt-[30px] flex justify-evenly'>
                <Specialdealscards pic={img} heading="Gaming Gear – The 5 best Gaming Keyboards" para=" Looking for a new gaming keyboard but unsure where to look? Let’s take a look at some of the top picks out there!" />

                <Specialdealscards pic={img1} heading="Gaming Gear – The 5 best gaming mice
" para=" Looking for a new gaming mouse but unsure where to look? Let’s take a look at some of the top picks out there!" />

                <Specialdealscards pic={img2} heading="Gaming Gear – The 5 best Gaming Desks for your setup
" para=" Do you need a Gaming Desk? We think that you should grab one! Here is everything you need to know about their advantages and the best models." />

                <Specialdealscards pic={img3} heading="Gaming Gear – The 5 best SSDs for Gaming
" para=" Which SSDs are the most fitting for Gamers? Here are the Top 5 for every price range and specifications you require." />
            </div>
            <Featured />
            <Meta />
            <Lastsec />
            <Footer/>
      </div>
    )
  }
}
