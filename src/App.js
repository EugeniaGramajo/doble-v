
import './App.css';
import FAQ from './components/FAQ';
import Header from './components/Header/Header';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Media from 'react-media';



function App() {
 
  return (
    <>
    <Media query="(min-width:500px)">
      {matches=>matches? "" :<h1 id="homes">Hidden Tittle</h1>}
    </Media>
    
    <Header></Header>
    <FAQ></FAQ>
    <Projects></Projects>
    <Contact></Contact>
    </>
  );
}

export default App;
