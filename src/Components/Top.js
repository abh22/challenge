import React from 'react';
import './Header.css';
import pic from "./logo.svg";
function Top(){
    return(
        <nav className='header'>
<img alt='be' src={pic}/> 
<p className='header-text'>ReactFacts</p>
        </nav>
    )
}
export default Top;