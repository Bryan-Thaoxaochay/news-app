const router = require('express').Router();
require('dotenv').config();

router.get('/', async(req, res) => {
    const api_key = process.env.API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`

    res.send(url);
})


module.exports = router;