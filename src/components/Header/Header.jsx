import React, { useState, useEffect } from "react";
import Media from "react-media";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";


export default function Header() {


  return (
    <>
    <Media query="(min-width:500px)">
      {matches=> matches? <HeaderDesktop></HeaderDesktop>:""}
    </Media>
    <Media query="(min-width:500px)">
     {matches=> matches? "" : <HeaderMobile></HeaderMobile> }
    </Media>

    </>
  );
}
