import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPosts from "./components/FormPosts";
import ListPosts from './components/ListPosts';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListPosts />}></Route>
        <Route path='/posts/crearPost' element={<FormPosts />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
