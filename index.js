const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const router = require('./routes/routes')
const api = require('./api/api');
const path = require('path')
const config = require('config')

const app = express()

const PORT = config.get('port') || 3001

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

api.api()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(router)

async function start() {
    try {
      await mongoose.connect(config.get('mongoUri'), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useUnifiedTopology: true
      })
      app.listen(PORT, () => {
        console.log('Server has been started...')
      })
    } catch (err) {
        console.log(err)
    }
}

start()