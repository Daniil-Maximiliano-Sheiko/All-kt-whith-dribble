import React from "react";
import img3 from './img/ViewAll.png'

function Products(props) {
    return (
<div id="reklama">
       <img src={img3} id='img3'/>
       <br></br>
       {props.view.map((el,index)=> {
                return <a href ={`/${el.link}`} key={index} id='product'>{el.name}</a>
            })}
       </div>
    )
}

export default Products;