
import './App.css';
import FAQ from './components/FAQ';
import Header from './components/Header/Header';


import Contact from './components/Contact';
import Projects from './components/Projects';
import MenuMobile from './components/MenuDesplegable/MenuMobile';
import { useSelector } from 'react-redux';


function App() {
  const mobileNav = useSelector(state=>state.menuButton)
  return (
    <>
    <Header></Header>
    <MenuMobile></MenuMobile>
    <FAQ></FAQ>
    <Projects></Projects>
    <Contact></Contact>
    </>
  );
}

export default App;
