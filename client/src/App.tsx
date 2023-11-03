import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Friends } from './pages/Friends';
import { Profile } from './pages/Profile';
import { Posts } from './pages/Posts';
import { Login } from './pages/Login';
import { SignUp } from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/friends" element={<Friends/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
