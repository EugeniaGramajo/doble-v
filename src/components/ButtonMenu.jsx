import React, { useState } from "react";
import MenuMobile from "./MenuMobile";

export default function ButtonMenu(){

    const [menu, setMenu] = useState(true)

    const clickHandler = ()=>{console.log(menu)
        setMenu(!menu)
        console.log(menu)
    }
    

    return(
        <>
        <div>
            <button onClick={clickHandler}  > MENU </button>
        </div>
        {
            menu? <MenuMobile isOpen={menu}></MenuMobile> : ""
        }
        </>
    )
}