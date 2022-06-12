const express = require('express');
const router = express.Router();
//no longer needed, created database
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    let id = req.params.id
    const sqlQuery = `
        UPDATE "galleryList"
        SET "likes" = likes + 1
        WHERE "id" = $1; 
    `;

    const sqlParams = [id];

    pool.query(sqlQuery, sqlParams)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(`PUT failed, ${error}`);
            res.sendStatus(500);
        });
}); 

// GET Route
router.get('/', (req, res) => {
    const sqlText = `
        SELECT * FROM "galleryList"
        ORDER BY "id"; 
    `;
    pool.query(sqlText)
    .then((response) => {
        res.send(response.rows);
    })
    .catch((error) => {
        console.log('Failed to GET list', error)
        res.sendStatus(500);
    });
});

//DELETE Route
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log("Delete request for:", id);
    const sqlQuery = `
        DELETE FROM "galleryList"
        WHERE "id" = $1; 
    `;
    const sqlParam = [id]
    pool.query(sqlQuery, sqlParam)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`DELETE failed, ${error}`);
            res.sendStatus(500);
        });
}); 

module.exports = router;