import React from 'react';

import Todo from './Todo';

const Main = () => {
    return (
        <section className="main">
            <div className="main__todos">
                <Todo />
            </div>
            <div className="main__others">

            </div>
        </section>
    )
}

export default Main
