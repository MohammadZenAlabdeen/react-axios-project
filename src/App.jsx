import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Item from './components/View/Item/Item.jsx';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/item/:id" element={<Item />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
