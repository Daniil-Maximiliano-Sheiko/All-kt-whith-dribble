import React from 'react';
import img1 from './img/ceramic1.png'
import img2 from './img/image2.jpg'
import img4 from './img/Image3.jpg'
import img5 from './img/text1.png'
import Products from './products';

function Body(props) {
    return(<div id='container-body'>
       <h1 id="text1">Handcrafted Ceramics<br></br> for Everyday Life <img src={img5} id='img5'/></h1>
       <div></div>
       <img src={img2} id='img2'/>
       <img src={img1} id='img1'/>
       <Products view ={props.navigation}/>
       <p id='gott'>Got the Internation<br></br> Design Award on 2020</p>
       <img src={img4} id='img4'/>
       <div></div>
       <p id='text2'>Every item created in our studio is careful crafted<br></br>with a focus on the smallest detail. The art of pottery<br></br> is our inspiration and passion.</p>
    </div>)
}


export default Body;