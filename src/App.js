import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Footer from './components/layouts/Footer';
import { ToastContainer } from 'react-toastify';

import TodoState from './context/todos/TodoState';

function App() {
  return (
    <TodoState>
      <Router>
        <Navbar />
        <ToastContainer autoClose={1800} hideProgressBar />
        <div className='wrapper'>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </div>
        <br />
        <br />
        <Footer />
      </Router>
    </TodoState>
  );
}

export default App;
