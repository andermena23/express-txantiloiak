const express = require('express')
const app = express()
const path = require("path")
// enable POST
app.use(express.urlencoded({extended: true}))

// enable static
app.use(express.static(path.join(__dirname, 'public')))

// use templates
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.render('index', {
        title: "Bezeroak",
        test: "Proba"
    })
})

app.get('/testquery', (req, res) => {
    res.send("Kaixo GET " + JSON.stringify(req.query))
    if (req.query.izena == "Ane") {
        console.log("Kaixo Ane")
    }
})

app.get("/test", function(req, res) {
    console.log("Hau test bat da")
    // this is wrong, something is missing...
})


app.get("/user/:zer/:identifikatzaile", function(req, res) {
    res.send(`Zer: ${req.params.zer}  ${req.params.identifikatzaile} `)
})


app.post('/jaso', (req, res) => {
    res.send(`Kaixo ${req.body.izen} ${req.body.abizen} `)
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})