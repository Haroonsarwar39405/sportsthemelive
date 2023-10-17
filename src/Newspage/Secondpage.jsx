import { Component } from 'react'
import Navbar from '../Homepage/Navbar'
import Mininav from '../Homepage/Mininav'
import Allnew from './Allnew';
import Allnewcard from './Allnewcard';
import Lastsec from '../Homepage/Lastsec';
import Footer from '../Homepage/Footer';

export default class Secondpage extends Component {
    render() {
        return (
            <>
                <div>
                    <Navbar />
                    <Mininav />
                    <Allnew />
                    <Allnewcard />
                    <Lastsec />
                    <Footer/>
                </div>
            </>
        )
    }
}
