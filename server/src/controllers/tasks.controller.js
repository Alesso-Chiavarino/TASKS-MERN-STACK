import { pool } from "../db.js"

export const getTasks = async (req, res) => {

    try {
        const [result] = await pool.query('SELECT * FROM tasks ORDER BY createAt ASC');

        if(result.length === 0) {
            return res.json({
                status: "error",
                error: "no tasks found"
            })
        }

        res.json({
            status: "success",
            data: result
        })

    } catch {
        res.status(500).json({
            status: "error",
            error: "something went wrong"
        })
    }
}

export const getTask = async (req, res) => {

    try {
        const { id } = req.params;

        const [result] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id]);

        if(result.length === 0) {
            return res.json({
                status: "error",
                error: "task not found"
            })
        }

        res.json({
            status: "success",
            message: result
        })
    } catch {
        res.status(500).json({
            status: "error",
            error: "something went wrong"
        })
    }

}

export const createTask = async (req, res) => {
    try {
        const {title, description} = req.body;

        await pool.query('INSERT INTO tasks(title, description) VALUES(?, ?)', [title, description]);
 
        res.json({
            status: "product created successfully",
            data: {
                title,
                description
            }
        })
    } catch {
        res.status(500).json({
            status: "error",
            error: "something went wrong"
        })
    }
}

export const updateTask = async (req, res) => {

    try {
        const {id} = req.params;
        const {title, description, done} = req.body;

        const [result] = await pool.query('UPDATE tasks SET ? WHERE id = ?', [req.body, id]);

        if(result.affectedRows === 0) {
            return res.json({
                status: "error",
                error: "task not found"
            })
        }

        res.json({
            status: "task updated successfully",
            data: {
                title,
                description,
                done
            }
        })
    } catch {
        res.status(500).json({
            status: "error",
            error: "something went wrong"
        })
    }
}

export const deleteTask = async (req, res) => {
    
    try {
        const {id} = req.params;

        const [result] = await pool.query('DELETE FROM tasks WHERE id = ?', [id]);

        if(result.affectedRows === 0) {
            return res.json({
                status: "error",
                error: "task not found"
            })
        }

        res.json({
            status: "success",
            error: "task removed successfully"
        })
    } catch {
        res.status(500).json({
            status: "error",
            error: "something went wrong"
        })
    }
}