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
        </div>
    )
}

export default App;