import  { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <div className='flex justify-between items-center w-full h-[13vh] bg-black px-[50px]'>
                <ul className='text-white flex justify-evenly gap-5 text-[12px] items-center'>
                    <li>Imprint</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy Settings</li>
                    <li>Contact</li>
                    <li>Editorial Staff</li>
                    <li>Terms and Conditions</li>
                </ul>
                <h1 className='text-white'>

                    © 2023 Seven.One Entertainment Group GmbH
                </h1>
            
      </div>
    )
  }
}
