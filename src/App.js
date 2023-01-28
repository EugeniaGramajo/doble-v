
import './App.css';
import FAQ from './components/FAQ';
import Header from './components/Header/Header';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Media from 'react-media';
import Footer from './components/Footer';
import Slogan from './components/Slogan';
import Border from './components/Border';




function App() {
 
  return (
    <>
    <Media query="(min-width:500px)">
      {matches=>matches? "" :<h1 id="homes">Hidden Tittle</h1>}
    </Media>
    
    <Header></Header>
    <Slogan></Slogan>
    
    <Projects></Projects>
    <FAQ></FAQ>
    <Border></Border>
    <Contact></Contact>
  
    <Footer></Footer>
    </>
  );
}

export default App;
