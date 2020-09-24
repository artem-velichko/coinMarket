module.exports.api = function() {
const setTime = require('../public/setTime');
const Price = require('../models/Price');
const express = require('express')
const moesif = require('moesif-nodejs');
const axios = require('axios')

const app = express();

// 2. Set the options, the only required field is applicationId
const moesifMiddleware = moesif({
    applicationId: 'eyJhcHAiOiI2NzY6NDgwIiwidmVyIjoiMi4wIiwib3JnIjoiNDM2OjM0MSIsImlhdCI6MTU5ODkxODQwMH0.TsNNV0eWnAumRX_9NccFakigJHXBwGPcFF1-DHlZaEw',
    
    // Optional hook to link API calls to users
    identifyUser: function (req, res) {
        return req.user ? req.user.id : undefined;
    },
});

// 3. Enable the Moesif middleware to start logging incoming API Calls
app.use(moesifMiddleware);

setInterval(run, 60000)

async function run() {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1&CMC_PRO_API_KEY=5c8b9e81-7db1-4eaa-bb81-332d0ccbdd04')
        
        let coin = response.data.data['1'].quote.USD.price

        const time = setTime()

        const price = new Price({
            price: coin,
            date: time
        })

        await price.save(function(err){
            if(err) {
                console.log(err);
            } else {
                console.log("Oбъект cохранен ");
            }
        })
        
    } catch (err) {
        console.log(err)
    }
}
}