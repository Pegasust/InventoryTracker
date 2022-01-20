const express = require('express');
const router = express.Router();

// get all inventory items
router
    .get('/', async function(req, res) {
        // list all
    })
    .get('/item/:inventory_id', async function(req, res) {
        // list those matching inventory_id
    })
    .get('/tag', async function(req, res) {
        // list all tags
    })
    ;