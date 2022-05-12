import React from "react";

function Nav(props) {
    return (
        <div id='nav'>
            {props.nav.map((el,index)=> {
                return <a href ={`/${el.link}`} key={index}>{el.name}</a>
            })}
        </div>
    )
}

export default Nav;