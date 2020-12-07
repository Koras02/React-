 
import React, { Component } from 'react';
import Video from '../video/video.mp4';
import {VideoBg} from './HomeElements';
 

class Home extends Component{
  render(){
    return (
        <div>
            <h1>Hello About Page</h1>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
        </div>
     );
   }
}
export default Home;
