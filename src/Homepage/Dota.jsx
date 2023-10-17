import { Component } from 'react'

export default class Dota extends Component {
    render() {
        return (
            <>
                <div className='hrdiv1'>
                </div>
                <h1 className='text-[#FFD129] text-4xl px-[60px] pt-[30px] hover:underline'>
                    DOTA 2
                </h1>
                <div className='flex py-[20px]'>
                    <div className='bg-5 w-[60%] h-[60vh] ml-[55px] mt-[30px]'>
                    </div>
                    <div>
                        <h1 className='text-white text-3xl font-bold px-[20px] pt-[60px]'>
                            PGL announces $500.000 Dota 2 Texas Major
                        </h1>
                        <p className='text-white w-[80%] px-[20px] pt-[10px]'>
                            A new Dota 2 Major is coming to the United States, says PGL, featuring a $500.000 prize pool.

                        </p>
                    </div>
                </div>
            </>
        )
    }
}
