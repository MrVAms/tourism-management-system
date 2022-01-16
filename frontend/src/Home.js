import React from 'react';
import "./Home.css";
import Banner from './Banner';
import  Card  from './Card';

function Home() {
  return (
		
		<div className ='home'>
       <Banner/>
       <div className ="home__section">
            <Card src ="https://www.topluxury.asia/wp-content/uploads/2018/05/pangu-7-star-hotel-beijing-presidential-suite-02.jpg" title ="Entire flat" description ="Spaces that are more than just a place to sleep."/>
            <Card src ="https://cdn1.goibibo.com/voy_mmt/t_g/htl-imgs/201807201804409400-01ad733690cd11e8be250224510f5e5b.jpg" title ="Unique stays" description = "Unique spaces with your loved one."/>
            <Card src= "https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/Treks-In-The-World-cover_18th-Nov.jpg" title = "Entire Touring Package" description ="You don’t have to be rich to travel well"/>
            <Card src ="https://www.picnicwale.com/special-offers/assets/images/family-tour-packages.jpg" title ="Family Package" description ="Spaces that are more than just a place to sleep."/>
       </div>
       <div className ='home__section'>
           <Card src= "https://i.pinimg.com/originals/0a/e5/1d/0ae51def741d45635d0b8a28d05bf911.jpg" title = "Deluxe room" description ="single bed" price = "Rs1500/night" />
           <Card src= "https://i1.wp.com/www.travelbinger.com/wp-content/uploads/2021/02/TheRitzCarltonTokyo-ModernJapaneseSuiteBedroom-CreditTheRitzCarltonHotelCompanyLLC.jpg?fit=2000%2C906&ssl=1" title = "Deluxe room" description ="single bed" price = "Rs1700/night"/>
           <Card src= "https://besthotelshome.com/wp-content/uploads/2020/08/Top-10-best-luxury-5-star-hotels-in-Vienna.jpg" title = "Super Deluxe room" description ="double bed" price = "Rs2000/night"/>
           <Card src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtA8sR1_MoIVMpjD8UUQZuBt5QRakbxL9EqWZlwnLAFFvXHcFCuywYvV2FAyt-L-cA-VM&usqp=CAU" title = "Super Deluxe room" description ="double bed" price = "Rs2000/night"/>

       </div>
		 </div>
  )
}
export default Home;