import React from 'react';
import { Routes, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import ErrorPage from './pages/Error';
import RoomsPage from './pages/Rooms';
import SingleRoomPage from './pages/SingleRoom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
<Navbar/>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/error" element={<ErrorPage />} />
      <Route exact path="/rooms" element={<RoomsPage />} />
      <Route exact path="/rooms/:slug" element={<SingleRoomPage />} />
    </Routes>
    </>
  );
};

export default App;
