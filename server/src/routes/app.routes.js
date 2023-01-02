import { Router } from "express";
import taskRoutes from "./task/task.routes.js";
import { pool } from "../db.js";

const router = Router();

router.use('/tasks', taskRoutes);

router.get('/ping', async (req, res) => {

    const result = await pool.query('SELECT "PONG" AS Result')

    res.json({
        status: "success",
        message: result[0][0].Result
    })
})

export default router;