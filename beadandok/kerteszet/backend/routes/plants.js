import express from 'express';
import { dbQuery, dbRun } from '../database.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const plants = await dbQuery("SELECT * FROM plants")
        res.status(200).json(plants)
    } catch (error) {
        next(error)
        
    }
})

router.post('/', async (req, res, next) => {
    try {
        const result = await dbRun(`INSERT INTO plants (name, perennial, category, price) VALUES (?, ?, ?, ?)`, [req.body.name, req.body.perennial, req.body.category, req.body.price])
        res.status(201).json({ id: result.lastID, ...req.body })
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const [plant] = await dbQuery("SELECT * FROM plants WHERE id = ?", [req.params.id])
        if (!plant) return res.status(404).json({message: "nem lehet megtalálni a növényt!"})
        res.status(200).json(plant)
    } catch (error) {
        next(error)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const [plant] = await dbQuery("SELECT * FROM plants WHERE id = ?", [req.params.id])
        if (!plant) return res.status(404).json({message: "nem lehet megtalálni a növényt!"})
        await dbRun(`UPDATE plants SET name = ?, perennial = ?, category = ?, price = ? WHERE id = ?`, [req.body.name, req.body.perennial, req.body.category, req.body.price, req.params.id])
        res.status(200).json({ id: req.id, ...req.body })
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const [plant] = await dbQuery("SELECT * FROM plants WHERE id = ?", [req.params.id])
        if (!plant) return res.status(404).json({message: "nem lehet megtalálni a növényt!"})
        await dbRun("DELETE FROM plants WHERE id = ?", [req.params.id])
        res.status(204).json({message: "sikeres törlés"})
    } catch (error) {
        next(error)
    }
})

export default router;