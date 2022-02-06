import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavItem } from './components/NavItem';
import { Navbar } from './components/Navbar';
import { DropdownMenu } from './components/DropdownMenu';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Settings from './pages/settings';

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem link='MenuItem1'>
          <DropdownMenu />
        </NavItem>
        <NavItem link='MenuItem2'>
          <DropdownMenu />
        </NavItem>
        <NavItem link='MenuItem3'>
          <DropdownMenu />
        </NavItem>
        <NavItem link='MenuItem4'>
          <DropdownMenu />
        </NavItem>
        <NavItem link='MenuItem5'>
          <DropdownMenu />
        </NavItem>
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
