import { Component } from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';
export default class Specialnav extends Component {
  
  render() {
    return (
        <div className='w-full h-[12vh] bg-black'>
            <div className='flex items-center pt-[20px] px-[60px] gap-3'>
            <BsArrowLeft className='text-white text-xl'/>
            <h1 className='text-white text-xl'>
               <Link to='/'> Special Deals</Link>
                </h1>
            </div>
        
      </div>
    )
  }
}
