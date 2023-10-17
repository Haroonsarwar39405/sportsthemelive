import { Component } from 'react'

export default class Esl extends Component {
    render() {
        return (
            <>
                <div className='hrdiv1'></div>
                <div className='flex'>
                    <div className='w-[50%]'>
                        <h1 className=' text-3xl text-white font-semibold px-[65px] pt-[30px]'>
                            Official ESL Shop
                        </h1>
                        <p className='w-full text-white px-[65px] pt-[20px]'>
                            The ESL Shop offers a wide range of merchandise from CS:GO and Dota2 merch to official clan wear of teams like Virtus Pro, FaZe, ENCE, BIG, fnatic, G2 Esports and more.
                        </p>
                        <button className='bg-[#FBBD2C] hover:bg-[#FF992D] font-bold w-40 h-12 ml-[65px] mt-[40px]'>
                            Shop now
                        </button>
                    </div>
                    <div className='bg-13 w-[45%] h-[50vh] mt-[30px]'>

                    </div>

                </div>
            </>
        )
    }
}
