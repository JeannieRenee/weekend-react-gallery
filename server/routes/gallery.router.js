const express = require('express');
const router = express.Router();
//no longer needed, created database
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

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

//POST Route
router.post('/', (req, res) => {
    const character = req.body;
    const sqlText = `INSERT INTO "galleryList" ("path", "name", "description", "likes")
                     VALUES ($1, $2, $3, $4)`;
    const sqlParams = [character.image, character.name, character.bio, 0]
    pool.query(sqlText, sqlParams)
        .then((result) => {
            console.log(`Added character to the database`, character);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
})

module.exports = router;