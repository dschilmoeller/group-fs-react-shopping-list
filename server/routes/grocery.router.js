const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


//GET Route to the database (Get items in the database).
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "shoppingList" ORDER BY "name"`;
    pool.query(queryText)
        .then((result) => {
            console.log('Got things back from the Database (GET)', result.rows);
            res.send(result.rows)
        })
        .catch((error) => {
            console.log(`Error making database query (GET) ${queryText}`, error)
            res.sendStatus(500)
        })
});

// POST Route to the database to add a new item)
router.post('/', (req, res) => {
    console.log(`req.body:`, req.body);
    const grocery = req.body;
    const queryText = `INSERT INTO "shoppingList" ("name", "qty", "unit", "purchased") VALUES ($1, $2, $3, $4)`;
    pool.query(queryText, [grocery.name, grocery.qty, grocery.unit, grocery.purchased])
        .then((result) => {
            console.log('Added item to the database (POST)', grocery);
            res.send(201)
        })
        .catch((error) => {
            console.log(`Error making database query (POST) ${queryText}`, error)
            res.sendStatus(500)
        })
});

//POST Route to the database to clear items (Add an item).
router.post('/clear/', (req, res) => {
    const grocery=req.body;
    const queryText = `` //Add in QueryText here;
    pool.query(queryText, [grocery.name, grocery.qty, grocery.unit, grocery.purchased])
        .then((result) => {
            console.log('Added item to the database (POST)', grocery);
            res.send(201)
        })
        .catch((error) => {
            console.log(`Error making database query (POST) ${queryText}`, error)
            res.sendStatus(500)
        })
});
//POST Route to the database to reset items (Add an item).
router.post('/reset/', (req, res) => {
    const grocery=req.body;
    const queryText = `` //Add in QueryText here;
    pool.query(queryText, [grocery.name, grocery.qty, grocery.unit, grocery.purchased])
        .then((result) => {
            console.log('Added item to the database (POST)', grocery);
            res.send(201)
        })
        .catch((error) => {
            console.log(`Error making database query (POST) ${queryText}`, error)
            res.sendStatus(500)
        })
});


//PUT Route to the database (Add an item).
router.put('/:id', (req, res) => {
    const idToChangeStatus=req.params.id;
    const grocery=req.body
    const queryText = `UPDATE "shoppingList" SET "purchased" = 'True' WHERE
    "id" = $1;` //Add in QueryText here;
    pool.query(queryText, [idToChangeStatus])
        .then((result) => {
            console.log('Successfully changed item in database (PUT)', idToChangeStatus);
            res.send(200)
        })
        .catch((error) => {
            console.log(`Error making database query (PUT) ${queryText}`, error)
            res.sendStatus(500)
        })
});

//DELETE Route to the database (Remove an item).
router.delete('/:id', (req, res) => {
    const idToDelete=req.params.id;
    const queryText = `DELETE FROM "shoppingList" WHERE id=$1;` //Add in QueryText here;
    pool.query(queryText, [idToDelete])
        .then((result) => {
            console.log('Successfully removed item from database (DELETE)', idToDelete);
            res.send(200)
        })
        .catch((error) => {
            console.log(`Error removing item from database (DELETE) ${queryText}`, error)
            res.sendStatus(500)
        })
});



module.exports = router;