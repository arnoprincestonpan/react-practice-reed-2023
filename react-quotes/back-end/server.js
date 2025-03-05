const express = require("express");
const cors = require('cors');
const app = express();
const port = 8000;
const quotesData = require('./data/quotesJSON.json');

// Enable CORS for all routes
app.use(cors());

// GET
app.get('/api/quotes', (req, res) => {
    try {
    if (!quotesData || !quotesData.results || quotesData.results.length === 0){
        return(res.status(404).json({
            error: "Quotes not found."
        }))
    }
    res.json(quotesData);
    } catch (error) {
        console.error('Error fetching quotes: ', error);
        res.status(500).json({
            error: "Internal Server Error."
        })
    }
});

// App listening to requests!
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})