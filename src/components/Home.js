 
import React, { Component } from 'react';
import Video from '../video/video.mp4';
import {VideoBg,VideoP1,VideoHeader} from './HomeElements';
import ReactPlayer from 'react-player'
 
 

class Home extends Component{
  render(){
    return (
        <div>
            <h1>Hello About Page</h1>
            <VideoHeader>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
            <VideoP1>GVA</VideoP1>
            </VideoHeader>
            <ReactPlayer url="https://youtu.be/D-i9oDLgyAc" autoPlay/>
        </div>
     );
   }
}
export default Home;
