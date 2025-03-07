import sqlite3 from 'sqlite3'

const database = new sqlite3.Database('./database.sqlite')

async function initializeDatabase() {
    await dbRun(`
        CREATE TABLE IF NOT EXISTS plants (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            perennial BOOLEAN,
            category TEXT,
            price INTEGER
        )
    `)

    const existingPlants = await dbQuery("SELECT COUNT(*) as count FROM plants")
    if (existingPlants[0].count === 0) {
        for (const plant of plants) {
            await dbRun(`INSERT INTO plants (name, perennial, category, price) VALUES (?, ?, ?, ?)`, [plant.name, plant.perennial, plant.category, plant.price])
        }
    }
}

function dbQuery(sql, params = []) {
    return new Promise((resolve, reject) => {
        database.all(sql, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function dbRun(sql, params = []) {
    return new Promise((resolve, reject) => {
        database.run(sql, params, function(err) {
            if (err) reject(err)
            else resolve(this)
        })
    })
}

export { database, initializeDatabase, dbQuery, dbRun }