const router = require('express').Router();
const axios = require('axios');
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
    const searchURL = `https://newsapi.org/v2/everything?q=${req.params.search}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    axios.get(searchURL).then(results => {
        res.send(results.data)
    })
})

router.get('/topheadlines/:category', (req, res) => {
    const searchURL = `https://newsapi.org/v2/top-headlines?language=en&category=${req.params.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    axios.get(searchURL).then(results => {
        res.send(results.data)
    })
})


module.exports = router;