const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
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
    const sqlParams = [
        id
    ];
    pool.query(sqlQuery, sqlParams)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(`PUT failed, ${error}`);
            res.sendStatus(500);
        });
}); 



//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// });  END PUT Route

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

// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route

module.exports = router;