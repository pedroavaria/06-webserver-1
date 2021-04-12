import express from 'express'
import hbs from 'hbs'
require('dotenv').config()
const app = express()
const port = process.env.PORT

// Handlebas
app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'))

const datos = {
    nombre: 'Pedro Avaria',
    titulo: 'Curso de node'
}

app.get('/', (req,res) => {
    res.render('home',datos)
})

app.get('/hola-mundo', (req,res) => {
    res.send('Hola que tal')
})

app.get('/generic', (req,res) => {
    res.render('generic',datos)
})

app.get('/elements', (req,res) => {
    res.render('elements',datos)
})

app.get('*', (req,res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Eñ servidor esta escuchando en http://localhost:${port}`);
    
})