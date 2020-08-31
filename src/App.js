import React from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';

import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <Button type="primary">Thêm</Button>
      <BookList />
    </div>
  );
}

export default App;
