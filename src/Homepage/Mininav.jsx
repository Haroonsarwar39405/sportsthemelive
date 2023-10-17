import { Component } from 'react'
import { AiOutlineRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
export default class Mininav extends Component {
  render() {
    return (
        <div className=' flex justify-evenly  items-center gap-10 w-full h-[12vh] bg-[#1A1A1A]'>
            <ul className='flex gap-16'>
                <Link to='/Special'><li className='text-white hover:text-[#FF2934]'>Special Deals</li></Link>
                <li className='text-white hover:text-[#FF2934]'>League of Legends</li>
                <li className='text-white hover:text-[#FF2934]'>CS:GO</li>
                <li className='text-white hover:text-[#FF2934]'>DOTA2</li>
                <li className='text-white hover:text-[#FF2934]'>Call of Duty</li>
                <li className='text-white hover:text-[#FF2934]'>Pokemom</li>
                <li className='text-white hover:text-[#FF2934]'>VALORANT</li>
                <li className='text-white hover:text-[#FF2934]'>Gaming</li>
                <span className='flex items-center'>
                    <AiOutlineRight className='text-white' />
                </span>
            </ul>
            
        
      </div>
    )
  }
}
