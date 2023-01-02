import express from 'express';
import apiRoutes from './routes/app.routes.js';
import cors from 'cors'
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use('/api', apiRoutes);
console.log(__dirname)
app.use(express.static(join(__dirname, '../../client/dist')));


// app.get('/', (req, res) => {

//     res.json({
//         status: "success",
//         message: 'Welcome to my server'
//     })
// })

export default app;