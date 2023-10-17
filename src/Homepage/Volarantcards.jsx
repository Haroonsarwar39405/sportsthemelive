import  { Component } from 'react'

export default class Volarantcards extends Component {
  render() {
      return (
        <>
              <div className='py-[20px]'>
                  <img className='w-56' src={this.props.pic} alt="" />
                  <h1 className='text-white w-60 pt-3'>
                      {this.props.heading}
                  </h1>
                  <p className='text-white w-72 pt-3'>
                      {this.props.para}
                  </p>
              </div>
          </>
    )
  }
}
