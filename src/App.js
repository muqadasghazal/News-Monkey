import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (

      <div>
      
        <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route exact path="/" element={< News pageSize={5} key="general" category="general" country="us"/>}></Route>
        <Route exact path="/business" element={< News pageSize={5} key="business" category="business" country="us"/>}></Route>
        <Route exact path="/entertainment" key="entertainment" element={< News pageSize={5} category="entertainment" country="us"/>}></Route>
        <Route exact path="/health"  element={< News pageSize={5} key="health" category="health" country="us"/>}></Route>
        <Route exact path="/science"  element={< News pageSize={5} key="science" category="science" country="us"/>}></Route>
        <Route exact path="/sports" element={< News pageSize={5}  key="sports" category="sports" country="us"/>}></Route>
        <Route exact path="/technology"  element={< News pageSize={5} key="technology"category="technology" country="us"/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App

