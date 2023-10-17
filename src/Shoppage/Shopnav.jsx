import  { Component } from 'react'

export default class Shopnav extends Component {
  render() {
    return (
        <div className='w-full h-[12vh] bg-black flex  items-center px-[60px]'>
            <ul className='text-white flex items-center gap-8 text-lg'>
                <li>esports.com Shop</li>
                <li>OWN3D</li>
                <li>Logitech G502</li>
                <li>ESL Shop</li>
                <li>Special Deals</li>
                <li>Featured</li>
                <li>Meta</li>
            </ul>
        
      </div>
    )
  }
}
