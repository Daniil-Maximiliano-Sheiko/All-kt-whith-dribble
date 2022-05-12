import React from 'react';
import useTheme from "./hooks/useTheme"

function Menu() {
    const {isDark, setIsDark} = useTheme()
    return (
        <div>
        <h1 className='logo'>Clay<span onClick={()=> setIsDark(!isDark)}>.</span>co</h1>
        </div>
    )
}

export default Menu;