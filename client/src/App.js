import React from 'react';
import './styles/main.scss';

import Content from './components/Content';
import Sidebar from './components/Sidebar';

const App = () => {
    return (
        <div className="container">
            <main className="container__main">
                <Sidebar />
                <Content />
            </main>
            <footer className="container__footer">
                <h2>hello footer</h2>
            </footer>
        </div>
    )
}

export default App;