const express = require('express');
const USERS = require("../models/user");

const router = express.Router();

router.post('/login', async (req, res) => {
    const body = req.body;
    console.log('body', body);
})

module.exports = router;