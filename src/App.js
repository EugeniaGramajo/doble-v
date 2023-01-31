
import './App.css';
import Header from './components/Header/Header';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Media from 'react-media';
import Footer from './components/Footer';
import Border from './components/Border';
import Home from './components/Home';
import Artist from './components/Artist';



function App() {

 
  return (
    <>
    <Media query="(min-width:500px)">
      {matches=>matches? "" :<h1 id="homes">Hidden Tittle</h1>}
    </Media>
    
    <Header></Header>

    <Home></Home>
    
    <Projects></Projects>
    <Artist></Artist>

    <Border></Border>
    <Contact></Contact>
  
    <Footer></Footer>
    </>
  );
}

export default App;
