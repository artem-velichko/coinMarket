const { Router } = require('express')
const Price = require('../models/Price')
const interval = require('../public/interval')
const correctInterval = require('../select/correctInterval')
const setDate = require('../public/setDate')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const coins = await Price.find({}).lean()
    
        let table = interval(correctInterval.correctInterval, coins)
        for (let value of table) {
            value.date = setDate(value.date)
        }
        res.render('index', {
            title: 'CoinMarketCap',
            table
        })
    } catch (err) {
        console.log(err)
    }
})

router.post('/', (req, res) => {
    let int = req.body.select
    console.log('(POST) Select: ', int.target)
    correctInterval.correctInterval = int
    res.redirect('/')
})

module.exports = router