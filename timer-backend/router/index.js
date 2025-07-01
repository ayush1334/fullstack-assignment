const express = require('express');
const { printModel } = require('../service/userserive');
const router = express();
const models = require('../../timer-models/models/index');

console.log(models.user);


// middleware
// router.use();

router.get('/api', async (req,res)=>{
    const params = req.body;
    const models = await printModel();
    res.send(models);
});

module.exports = router;