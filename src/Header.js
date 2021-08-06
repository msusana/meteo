import React from 'react';

import { Link } from 'react-router-dom';

function Header(){
        return(
        <header className="App-header">
         <Link to='/'>
         <img src="logo_transparent.png" className="App-logo" alt="logo"></img>
         </Link> 
         </header>
        )
    }

export default Header