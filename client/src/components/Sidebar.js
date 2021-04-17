import React, { useState } from 'react'

const Sidebar = () => {

    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {

        if (description === "") {

        }
        else {
            try {
                const body = { description };

                const response = await fetch("http://localhost:5000/todos", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                })
            } catch (error) {
                console.error(error.message);
            }
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
            </form>
        </section>
    )
}

export default Sidebar
