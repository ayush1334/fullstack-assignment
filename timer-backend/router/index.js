const express = require('express');
const { printModel, getTimer, updateTimer } = require('../service/userserive');
const router = express();
const models = require('../../timer-models');

console.log(models.user);


// middleware
// router.use();

router.get('/api', async (req,res)=>{
    const params = req.body;
    const models = await printModel();
    res.send(models);
});

router.get('/get-timer/:id', async (req, res)=>{
    const params = {};
    params.userId = req.params?.id;
    const data = await getTimer(params);
    res.send(data);
});

router.post('/update-timer', async (req, res)=>{
    const params = req.body;
    const data = await updateTimer(params);
    res.send(data);
});

module.exports = router;