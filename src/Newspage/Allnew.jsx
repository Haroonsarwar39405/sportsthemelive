import { Component } from 'react'

export default class Allnew extends Component {
  render() {
    return (
      <>
        <div>
          <h1 className='text-[#FFD129] text-4xl px-[60px] pt-[30px] hover:underline'>
            News
          </h1>

          <ul className='flex gap-5 text-[15px] mt-[50px]'>
            <h2 className='text-[#FFD129] underline px-[100px]'>
              All
            </h2>
            <li className='text-white hover:text-[#FF2934]'>Special Deals</li>
            <li className='text-white hover:text-[#FF2934]'>League of Legends</li>
            <li className='text-white hover:text-[#FF2934]'>CS:GO</li>
            <li className='text-white hover:text-[#FF2934]'>DOTA2</li>
            <li className='text-white hover:text-[#FF2934]'>Call of Duty</li>
            <li className='text-white hover:text-[#FF2934]'>Pokemom</li>
            <li className='text-white hover:text-[#FF2934]'>VALORANT</li>
            <li className='text-white hover:text-[#FF2934]'>Gaming</li>
            <li className='text-white hover:text-[#FF2934]'>Entertainment</li>
            <li className='text-white hover:text-[#FF2934]'>FIFA</li>

          </ul>
        </div>
      </>
    )
  }
}
