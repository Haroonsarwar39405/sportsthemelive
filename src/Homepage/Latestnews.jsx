import React, { Component } from 'react';
import Img from "../Img/LEC-Grand-Final-to-feature-live-audience-350x197.jpg";
import Img1 from "../Img/Beste-Gaming-Headsets-350x197.jpg";
import Img2 from '../Img/NAVI-CEO-about-war-in-Ukraine-350x197.jpg';
import Img3 from "../Img/New-VALORANT-AGent-teaser-350x197.jpg";

export default class Latestnews extends Component {
  state = {
    items: [
      {
        id: 1,
        buttonText: 'Leagues',
        imgUrl: Img,
        heading: 'LEC to bring back live audience for spring split Finals',
        Para: 'The LEC is bringing back the live audience for one series, as the competition moves closer to the Spring Split finals.'
      },
      {
        id: 2,
        buttonText: 'Gaming',
        imgUrl: Img1,
        heading: 'Gaming Gear – The 5 best Gaming Headsets',
        Para: '*Disclaimer: All links to other online shops are affiliate links. esports.com receives a'
      },
      {
        id: 3,
        buttonText1: 'CS:GO',
        buttonText2: 'DOTA2',
        buttonText3: 'Gaming',
        imgUrl: Img2,
        heading: 'How CEO Yevhen Zolotarov charts a course for NAVI through',
        Para: 'We reached out to Natus Vinceres CEO Yevhan Zolotarov to talk about his'
      },
      {
        id: 4,
        buttonText: 'Valarant',
        imgUrl: Img3,
        heading: 'Have the abilities of the newest VALORANT agent been leaked?',
        Para: 'According to popular VALORANT twitter account ValorLeaks, the abilities of'
      },
    ]
  }

  render() {
    return (
      <div className='flex  w-full  px-[20px]'>
        <div className=''>
          <h1 className='text-[#FFD129] text-4xl px-[20px] pt-[30px] hover:underline'>
            Latest News
          </h1>
          <div className='bg-1 w-[95%] h-[60vh] ml-[20px] mt-[30px]'>
          </div>
          <button className='ml-[20px] mt-[20px] w-20 h-6 rounded-[5px] bg-[#FFD129]'>Gaming</button>
          <h1 className='px-[20px] pt-[20px] text-white text-3xl w-full font-bold'>
            Gaming Gear – The 5 best Wireless Headsets compared
          </h1>
          <p className='px-[20px] pt-[20px] text-white w-full'>
            Headsets are an essential part of your Gaming Gear. Now if you also want to enjoy the comfort of wireless headsets, there are plenty to choose from. Here are our top 5 recommendations.
          </p>
        </div>
        <div className='flex flex-col mt-[75px]'>
          {this.state.items.map((item) => (
             <div key={item.id}>
              {item.buttonText && <button className=' mt-[20px] w-20 h-6 rounded-[5px] bg-[#FFD129] '>{item.buttonText}</button>}
              {item.buttonText1 && <button className=' mt-[20px] w-20 h-6 rounded-[5px] bg-[#FFD129]'>{item.buttonText1}</button>}
              {item.buttonText2 && <button className='ml-5 mt-[20px] w-20 h-6 rounded-[5px] bg-[#FFD129]'>{item.buttonText2}</button>}
              {item.buttonText3 && <button className='ml-5 mt-[20px] w-20 h-6 rounded-[5px] bg-[#FFD129]'>{item.buttonText3}</button>}
              <div className='flex'>
                <div>
                  <img className='w-[45vw] h-32 pt-5' src={item.imgUrl} alt="" />
                </div>
                <div className="ml-3">
                  <h1 className='text-white font-semibold w-64 px-5 pt-5'>{item.heading}</h1>
                  <p className='text-white  text-[13px] w-60 px-5'>{item.Para}</p>
                </div>
              </div>
            </div>
          ))} 
        </div>
        
      </div>
    )
  }
}
