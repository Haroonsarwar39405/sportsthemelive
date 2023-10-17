import { Component } from 'react'
import { BsToggleOn } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai"
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
        <div className='w-full h-[20vh]  flex justify-evenly items-center'>
            <h1 className='text-5xl text-[#FF2934]'>
                    esports.com
            </h1>
            <div>
                <ul className='flex justify-evenly  items-center text-[18px] text-white  gap-16 '>
            <Link to="/"><li className='hover:text-[#FF2934]'>Home</li></Link>
            <Link to="/Secondpage"><li className='hover:text-[#FF2934]'>News</li></Link>
            <Link to="/Video"><li className='hover:text-[#FF2934]'>Videos</li></Link>
            <Link to="/Special"><li className='hover:text-[#FF2934]'>Special deals</li></Link>
            <Link to="/Shop"><li className='hover:text-[#FF2934] border-r px-[20px]'>Shop</li></Link>
                    <BsToggleOn />
                    <span className=' flex items-center gap-1'>EN
                        <AiOutlineDown className='text-base' />
                    </span>
                </ul>


            </div>
            
        
      </div>
    )
  }
}
