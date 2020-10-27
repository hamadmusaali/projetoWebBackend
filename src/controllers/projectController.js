const express = require('express');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

const Posts = require('../models/posts');

router.use(authMiddleware);

router.post('/', async (req, res) => {
    try {
        const posts = await Posts.create(req.body);
        return res.send({ 
            posts
        });
    } catch (err) {
        return res.status(400).send({ error: 'Falha no envio' });
    }
});

router.get('/', async (req, res) => {
    const {text} = req.body;

    try {
        if(text) {
            const busca = await Posts.find({ text: new RegExp('^' + text)});
            return res.send({ busca });
        }
        else {
            const busca = await Posts.find();
            return res.send({ busca });
        } 
    } catch (err) {
        return res.status(400).send({ error: 'Falha na busca' });
    }
});

module.exports = app => app.use('/projects', router); 