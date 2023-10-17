import  { Component } from 'react'

export default class Topgamescard extends Component {
    render() {
        return (
            <>
        <div>
            <img className='w-40' src={this.props.pic} alt="" />
            <h1 className='text-white text-base pt-[10px] hover:text-[#FFD129] hover:underline'>
                {this.props.name}
                    </h1>        
                </div>
      </>
    )
  }
}
