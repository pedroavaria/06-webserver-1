import express from 'express'
const app = express()
const port = 8080

// Servir contenido estático

app.use(express.static('public'))

app.get('/hola-mundo', (req,res) => {
    res.send('Hola que tal')
})

app.get('/generic', (req,res) => {
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req,res) => {
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', (req,res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Eñ servidor esta escuchando en http://localhost:${port}`);
    
})