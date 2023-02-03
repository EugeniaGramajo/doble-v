import Media from "react-media";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  return (
    <>
    <div id="header">
    <Media query="(min-width:500px)">
      {matches=> matches? <HeaderDesktop></HeaderDesktop>:<HeaderMobile></HeaderMobile>}
    </Media>
 </div>
    </>
  );
}
