const router = require('express').Router();
require('dotenv').config();

router.get('/', (req, res) => {
    const api_key = process.env.NEWS_API_KEY;
    const topStoryURL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`;

    res.send(topStoryURL);
})

router.get('/category/:category', (req, res) => {
    const api_key = process.env.NEWS_API_KEY;
    const paramsURL=`https://newsapi.org/v2/top-headlines?language=en&category=${req.params.category}&apiKey=${api_key}`;

    res.send(paramsURL)
})

router.get('/search/:search', (req, res) => {
    const api_key=process.env.NEWS_API_KEY;
    const searchURL = `https://newsapi.org/v2/everything?q=${req.params.search}&apiKey=${api_key}`

    res.send(searchURL)
})


module.exports = router;