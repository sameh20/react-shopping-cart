import React from "react";
import "../../css/Header/Header.css"
import "../../words"
import { words } from "../../words";

function Header () {
    return(
        <header>
        {words.headerTitle}
        </header>
    )
    
}
export default Header