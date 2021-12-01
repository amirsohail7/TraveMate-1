import React, { Component } from 'react'
import Carousel from './Carousel';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";

const data = [
  {id:"1",title:"BACKPACKING TRIPS",url:"https://www.wanderon.in/svg/backpacking-trips.svg"},
  {id:"2",title:"WEEKEND TRIPS",url:"https://www.wanderon.in/svg/weekend-trips.svg"},
  {id:"3",title:"WORKCATIONS STAYS",url:"https://www.wanderon.in/svg/workcations.svg"},
  {id:"4",title:"ADVENTURE COURSES",url:"https://www.wanderon.in/svg/scuba.svg"},
  {id:"5",title:"CUSTOMISED TRIPS",url:"https://www.wanderon.in/svg/customised-trips.svg"},
  {id:"6",title:"CORPORATE TRIPS",url:"https://www.wanderon.in/svg/corporate-trips.svg"},
]

const dataForBackPacking = [
  {url:"https://www.wanderon.in/triplist/bir-billing/wanderon-bir-1.jpg"},
  {url:"https://www.wanderon.in/triplist/manali-lahaul/wanderon-manali-1.jpg"},
  {url:"https://www.wanderon.in/triplist/kasol-kheerganga/wanderon-kasol-1.jpg"},
  {url:"https://www.wanderon.in/triplist/tirthan-valley/wanderon-tirthan-1.jpg"},
  {url:"https://www.wanderon.in/triplist/chopta-tungnath/wanderon-chopta-1.jpg"},
  {url:"https://www.wanderon.in/triplist/mcleodganj-bir-billing/wanderon-bir-1.jpg"},
]


const dataTop = [
  {url:"https://www.wanderon.in/triplist/meghalaya-road-trip/wanderon-meghalaya-1.jpg"},
  {url:"https://www.wanderon.in/triplist/bir-kasol-kheerganga/wanderon-kasol-1.jpg"},
  {url:"https://www.wanderon.in/triplist/kasol-kheerganga-manali/wanderon-manali-1.jpg"},
  {url:"https://www.wanderon.in/triplist/parvati-valley-summer/wanderon-parvati-1.jpg"},
  {url:"https://www.wanderon.in/triplist/spiti-summer/wanderon-spiti-1.jpg"},
  {url:"https://www.wanderon.in/triplist/spiti-circuit-biking/wanderon-spiti-18.jpg"},
  {url:"https://www.wanderon.in/triplist/manali-leh-manali/wanderon-ladakh-1.jpg"},
  
]  

export default class DestinationHome extends Component {


    render() {
       
        return (
            <div>
            <Carousel title="Upcomming Trips" data={dataTop}/>
            <Carousel title="Stay" data={dataForBackPacking}/>
            <Carousel title="Eat" data={dataTop}/>
            </div>
        )
    }
}
