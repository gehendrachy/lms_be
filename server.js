
import express from 'express'
import { connectMongo } from './src/config/mongoConfig.js';

const app = express();
const PORT = process.env.PORT || 8000;

// config

connectMongo()
.then( () => {
    app.listen(PORT, (error) => {
        error ? console.log(error)
              : console.log(`server is running at http://localhost:${PORT}`);
    })
}).catch((error) => console.error(error));
// Middlewares


// Routers

app.get("/", (req, res) => {
    res.json({
        message: "server is live",
    });
})

// Listen Server
