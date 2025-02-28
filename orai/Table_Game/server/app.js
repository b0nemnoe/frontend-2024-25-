const express = require("express");
const cors = require("cors");  // ⬅️ CORS csomag importálása

const app = express();
const port = 3000;

app.use(cors());  // ⬅️ Engedélyez minden bejövő kérést
app.use(express.json()); // ⬅️ Engedélyezd a JSON formátumú kéréseket

let fours = [];

app.get("/fours", (req, res) => {
    res.json(fours);
});

app.get("/fours/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (id < 0 || id >= fours.length) {
        return res.status(404).json({ error: "Not found" });
    }
    res.json(fours[id]);
});

app.post("/fours", (req, res) => {
    const { numbers } = req.body;
    if (!Array.isArray(numbers) || numbers.length !== 4) {
        return res.status(400).json({ error: "Invalid data" });
    }

    fours.push(numbers);
    res.status(201).json({ message: "Numbers added successfully", numbers });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
