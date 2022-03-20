import {BrowserRouter}from 'react-router-dom';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { connect } from 'react-redux';

function App() {
  return (
    <div>   
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
