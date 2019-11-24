import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/nav/index";
import "./styles.css";
import Footer from './components/footer/index'

function App() {
  return (
    <div className="App">
      <Nav />
      <Footer />  
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
