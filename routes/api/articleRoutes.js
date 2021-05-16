const router = require('express').Router();
// const articlesController = require('../../controllers/')

router.get('/', async(req, res) => {
    const api_key = process.env.API_KEY;
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey="

    res.send(url+api_key);
})


module.exports = router;