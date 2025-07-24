const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectToDB = require('./db/connectDB');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("<h1>Server is working fine ...</h1>");
});

// Connect to MongoDB
connectToDB();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));