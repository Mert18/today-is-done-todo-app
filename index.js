const express = require('express');
const cors = require('cors');
const app = express();

const pool = require('./db');

const PORT = process.env.PORT || 5000;

//process.env.PORT
//process.env.NODE_ENV => production or undefined
/* app.use(express.static("./client/build")) */

app.use(cors());
app.use(express.json());

//ROUTES//

//get all Todo
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (error) {
        console.error(error.message)
    }
})

//get a todo
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0]);
    } catch (error) {
        console.error(error.message)
    }
})

//create a todo
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES ($1) RETURNING *", [description]
        )
        res.status(200).json(newTodo.rows[0]);
    } catch (error) {
        console.error(error.message)
    }
})

//update a todo
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
        res.status(200).json("Todo was updated.")
    } catch (error) {
        console.error(error.message)
    }
})

//delete a todo

app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.status(200).json("Todo was deleted.");
    } catch (error) {
        console.error(error.message)
    }
})

app.get("*", (req, res) => {
    res.sendFİle(path.join(__dirname, "client/build/index.html"))
})

app.listen(PORT, () => {
    console.log(`Server is up on ${PORT}`)
})

