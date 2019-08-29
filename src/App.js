import React from 'react';
import './App.css';
import Auth from '../src/components/Auth/Auth'
import Dashboard from '../src/components/Dashboard/Dashboard'
import Form from '../src/components/Form/Form'
import Nav from '../src/components/Nav/Nav'
import Post from '../src/components/Post/Post'

function App() {
  return (
    <div className="App">
      <Auth />
      <Dashboard />
      <Form />
      <Nav />
      <Post />
    </div>
  );
}

export default App;
