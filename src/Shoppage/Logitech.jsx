import { Component } from 'react'

export default class Logitech extends Component {
    render() {
        return (
            <>
                <div className='hrdiv1'></div>
                <div className='flex'>
                    <div className='w-[50%]'>
                        <h1 className=' text-3xl text-white font-semibold px-[65px] pt-[30px]'>
                            Logitech G502
                        </h1>
                        <h2 className='w-full text-3xl text-white font-semibold px-[65px] pt-[60px]'>
                            Gaming Mice
                        </h2>
                        <p className='w-full text-white px-[65px] pt-[20px]'>
                            The Logitech G502 HERO is a choice made by many professional esports players and, which is nice for more casual gamers, sits at a very affordable price point. It has a wide DPI range and features 11 customizable buttons, which is a pretty high amount, offering a lot of versatility. Furthermore it’s possible to tweak the weight of the mouse in 3.6 grams intervals, as you’re able to change it to your liking.
                        </p>
                        <button className='bg-[#FBBD2C] hover:bg-[#FF992D] font-bold w-40 h-12 ml-[65px] mt-[40px]'>
                            Shop now
                        </button>
                    </div>
                    <div className='bg-12 w-[45%] h-[50vh] mt-[30px]'>

                    </div>

                </div>
            </>

        )
    }
}
