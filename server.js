const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./database');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static(__dirname)); // Serve static files from current directory
app.use(express.json());

// Get Stats
app.get('/api/stats', (req, res) => {
    db.all("SELECT * FROM stats", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Get Faculty
app.get('/api/faculty', (req, res) => {
    db.all("SELECT * FROM faculty", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Get Achievements
app.get('/api/achievements', (req, res) => {
    db.all("SELECT * FROM achievements", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
