
import './App.css';
import FAQ from './components/FAQ';
import Header from './components/Header';
import { Provider } from 'react-redux';
import Form from "./components/Form";
import Contact from './components/Contact';import Projects from './components/Projects';

function App() {
  return (
    <>
    <Provider>
    <Header></Header>
    <FAQ></FAQ>
    <Projects></Projects>
    </Provider>
    </>
  );
}

export default App;
