import React,{Component} from 'react';

import './style.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos =[
  {name:'photo1',
  url: "http://www.3djewelsindia.com/images/new-ecom-images/Banner-1.jpg"},
  {name:'photo1',
  url: "https://www.vaidaan.com/images/slide01.jpg"},
  {name:'photo1',
  url: "http://shop.3djewelsindia.com/images/home/banner/Banner-17.jpg"},
  {name:'photo1',
  url: "http://shop.3djewelsindia.com/images/home/banner/Banner-21.jpg"},
  ]
class Show extends Component{
  render(){
    const settings ={
      dots: true,
      fade: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: "slides"
  }
  return(
    <div className="App">
        <Slider {...settings}>
        {photos.map((photo) =>{
            return(
                <div>
                    <img width="100%" height="600px" src={photo.url}/>
                </div>
            )

        })}
        </Slider>
    </div>
   )
  }
}
export default Show;
