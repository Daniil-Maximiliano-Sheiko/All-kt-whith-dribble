import React from 'react';
import Nav from "./nav";
import Seacrh from "./Search";
// import { BeakerIcon } from '@heroicons/react/solid';
import Menu from './menu';

function Header(props) {
    return (
        <div id='Container'>
            <Menu/>
            <div>
                <Nav nav ={props.navigation}/>
            </div>
            <div id='ss'>
                <Seacrh />
            </div>
        </div>
    )
}

export default Header;