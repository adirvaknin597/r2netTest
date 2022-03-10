const express = require('express');
const User = require('./models/users.model');
const userLogic = require('./logics/userLogic');
const router = express.Router();

router.get('/users/:id?', async (req, res) => {
    try {
        let filter = req.params.id ? {_id: req.params.id} : {};
        let users = await User.find(filter);
        return res.status(200).json(users)
    }catch (error) {
        return res.status(500).json({error: true, msg: error.message})
    }
});


router.post('/users', async (req, res) => {
    try {
        const newUser = await userLogic.upsertUser(null, req.body) 
        return res.status(200).json({ newUser });
    }catch (error) {
        return res.status(500).json({error: true, msg: error.message})
    }
});

router.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await userLogic.upsertUser(req.params.id, req.body) 
        return res.status(200).json({updatedUser});
    }catch (error) {
        return res.status(500).json({error: true, msg: error.message})
    }
});

router.delete('/users/:id', async (req, res) => {
    try {
        const userId = await userLogic.deleteUser(req.params.id)
        return res.status(200).json({ userId });
    }catch (error) {
        return res.status(500).json({error: true, msg: error.message})
    }
});

module.exports = router;


