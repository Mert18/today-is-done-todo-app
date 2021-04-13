import React from 'react'

const Sidebar = () => {
    return (
        <section className="sidebar">

            <div className="sidebar__header">
                <h1>Today is Done.</h1>
            </div>

            <div className="sidebar__search">
                <input type="text" />
            </div>
            <div className="sidebar__options">
                <div className="sidebar__options__select">
                    <select>
                        <option>1 Day</option>
                        <option>3 Days</option>
                        <option>7 Days</option>
                        <option>30 Days</option>
                    </select>
                </div>
                <div className="sidebar__options__prio">
                    <select>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>
                <div className="sidebar__options__submit">
                    <button>Submit</button>
                </div>
            </div>

            <div className="sidebar__remain">

            </div>
        </section>
    )
}

export default Sidebar
