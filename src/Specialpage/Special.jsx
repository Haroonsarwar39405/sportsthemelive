import { Component } from 'react'
import Navbar from '../Homepage/Navbar'
import Specialnav from './Specialnav'
import Spsec1 from './Spsec1'
import Spcard from './Spcard'
import Spnews from './Spnews'
import Spnewscard from './Spnewscard'
import Lastsec from '../Homepage/Lastsec'
import Footer from '../Homepage/Footer'

export default class Special extends Component {
  render() {
    return (
        <div>
            <Navbar />
            <Specialnav />
            <Spsec1 />
            <Spcard />
            <Spnews />
            <Spnewscard />
            <Lastsec />
            <Footer/>
        
      </div>
    )
  }
}
