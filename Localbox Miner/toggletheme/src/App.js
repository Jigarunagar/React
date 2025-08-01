import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './features/themeSlice';

function App() {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <div className={theme === 'dark' ? 'App dark bg-gray-900 min-h-screen' : 'App bg-white min-h-screen'}>
      <header className="App-header">
        <button
          onClick={() => dispatch(toggleTheme())}
          className="px-4 py-2 mb-4 rounded bg-blue-500 text-white hover:bg-blue-700 transition"
        >
          {theme == 'dark' ? 'Swith to Light Mode' : 'Switch to Dark Mode'}
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
