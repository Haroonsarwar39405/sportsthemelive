import { Component } from 'react'
import Navbar from '../Homepage/Navbar';
import Mininav from '../Homepage/Mininav';
import Latestvideo from './Latestvideo';
import Latestvideocard from './Latestvideocard';
import Lastsec from '../Homepage/Lastsec';
import Footer from '../Homepage/Footer';

export default class Video extends Component {
  render() {
    return (
        <div>
            <Navbar />
            <Mininav />
            <Latestvideo />
            <Latestvideocard />
            <Lastsec />
            <Footer/>
      </div>
    )
  }
}
