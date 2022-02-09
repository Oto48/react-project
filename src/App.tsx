import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavItem } from './components/NavItem';
import { Navbar } from './components/Navbar';
import { DropdownMenu } from './components/DropdownMenu';
import {Sidebar} from './components/Sidebar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Settings from './pages/settings';

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem name='MenuItem1' link="https://www.freecodecamp.org/">
          <DropdownMenu />
        </NavItem>
        {/* <NavItem name='MenuItem2' link="https://www.freecodecamp.org/">
          <DropdownMenu />
        </NavItem>
        <NavItem name='MenuItem3' link="https://www.freecodecamp.org/">
          <DropdownMenu />
        </NavItem>
        <NavItem name='MenuItem4' link="https://www.freecodecamp.org/">
          <DropdownMenu />
        </NavItem>
        <NavItem name='MenuItem5' link="https://www.freecodecamp.org/">
          <DropdownMenu />
        </NavItem> */}
      </Navbar>
      <div className='flex'>
        <Sidebar />
        <Router>
          <Routes>
            <Route path='/' element={<Settings />}/>
            <Route path='/settings' element={<Settings />}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
