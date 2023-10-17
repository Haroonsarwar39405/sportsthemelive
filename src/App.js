import { Component } from 'react'
import Home from './Homepage/Home'
import { Routes, Route } from "react-router-dom";
import Secondpage from './Newspage/Secondpage';
import Video from './Videopage/Video';
import Special from './Specialpage/Special';
import Shop from './Shoppage/Shop';

export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Secondpage' element={<Secondpage />} />
          <Route path='/Video' element={<Video />} />
          <Route path='/Special' element={<Special />} />
          <Route path='/Shop' element={<Shop/>} />



        </Routes>
        
      </div>
    )
  }
}
