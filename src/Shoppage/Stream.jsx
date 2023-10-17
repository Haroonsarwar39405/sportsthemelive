import React, { Component } from 'react'

export default class Stream extends Component {
  render() {
    return (
        <div className='flex'>
            <div className='w-[50%]'>
                <h1 className=' text-3xl text-white font-semibold px-[65px] pt-[30px]'>
                    Thinking of streaming?
                </h1>
                <h2 className='w-full text-3xl text-white font-semibold px-[65px] pt-[60px]'>
                    Say yes & get 50% off your cool looks for that at OWN3D!
                </h2>
                <p className='w-full text-white px-[65px] pt-[20px]'>
                    OWN3D is the #1 online shop for streamers and has the biggest selection of Stream Overlay Packages, alerts, emotes and more! All designs work right out of the box with your streaming software of choice. OBS Studio, Streamlabs or StreamElements. Be ready on any streaming platform like Twitch, YouTube, Trovo or Facebook. Get 50% off using the code “streaming”. Your viewers will love it.
                </p>
                <button className='bg-[#FBBD2C] hover:bg-[#FF992D] font-bold w-40 h-12 ml-[65px] mt-[40px]'>
                    Shop now
                </button>
            </div>
            <div className='bg-11 w-[45%] h-[50vh] mt-[30px]'>

            </div>
        
      </div>
    )
  }
}
