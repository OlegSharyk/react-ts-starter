import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>React APP</h1>
                <p>
                    Edit <code>src/App.tsx</code>
                </p>
            </header>
        </div>
    );
};

export default App;
