const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
const LOCALHOST = 'http://localhost:8015/';

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

// Get all posts
router.get('/fromoutside', (req, res) => {
    // Get posts from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
    axios.get(`${API}/posts`)
    .then(posts => {
    res.status(200).json(posts.data);
})
.catch(error => {
    res.status(500).send(error);
});
});

router.get('/fromlocalhost', (req, res) => {
    // Get posts from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
    axios.get(`http://localhost:8015/api/data`)
    .then(posts => {
        console.log('local data cameback');
        res.status(200).json(posts.data);
    })
    .catch(error => {
        console.log('local data cameback with error');
        res.status(500).send(error)
    });
});

module.exports = router;