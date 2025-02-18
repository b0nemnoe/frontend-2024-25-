import sqlite3 from 'sqlite3'

const database = new sqlite3.Database('./database.sqlite')

async function initializeDatabase() {

    await dbRun("DROP TABLE IF EXISTS plants")
    await dbRun(`
        CREATE TABLE plants (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            perennial boolean,
            category TEXT,
            price INTEGER )`)

            const plants = [
                { id:1, name: "Tulipán", perennial: false, category: "virág", price: 100 },
                { id:2, name: "Rózsa", perennial: true, category: "virág", price: 200 },
                { id:3, name: "Orgona", perennial: true, category: "bokor", price: 300 },
                { id:4, name: "Fűz", perennial: true, category: "fa", price: 400 },
                { id:5, name: "Tölgy", perennial: true, category: "fa", price: 500 }
            ]

    for (const plant of plants) {
        await dbRun(`INSERT INTO plants (name, perennial, category, price) VALUES (?, ?, ?, ?)`, [plant.name, plant.perennial, plant.category, plant.price])
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
