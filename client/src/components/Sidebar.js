import React, { useState } from 'react'

const Sidebar = () => {

    const [description, setDescription] = useState("");
    const [time, setTime] = useState(new Date());
    const [priority, setPriority] = useState("Low");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = { description, time, priority };

            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <section className="sidebar">

            <div className="sidebar__header">
                <h1>Today is Done.</h1>
            </div>

            <form className="form" onSubmit={handleSubmit}>
                <div className="sidebar__desc">
                    <label htmlFor="desc">DESCRIPTION</label>
                    <input name="desc" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="sidebar__time">
                    <label htmlFor="desc">TIME (in Hours)</label>
                    <input type="number" value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <div className="sidebar__prio">
                    <label htmlFor="desc">PRIORITY</label>
                    <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>
                <div className="sidebar__submit">
                    <button>Submit</button>
                </div>


            </form>

            <div className="sidebar__remain">

            </div>
        </section>
    )
}

export default Sidebar
