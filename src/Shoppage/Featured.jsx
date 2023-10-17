import { Component } from 'react'
import fifa from "../Img/fifa.jpg";

export default class Featured extends Component {
  render() {
    return (
        <div>
            <div className='hrdiv1'>
            </div>
            <h1 className='px-[80px] pt-[30px] text-4xl text-white font-semibold'>
                Featured
            </h1>
            <img className='ml-[80px] mt-[30px]' src={fifa} alt="" />
            <h1 className='px-[80px] text-white pt-[10px]'>
                FIFA
            </h1>
        </div>
    )
  }
}
