import http from 'http'

http.createServer((req,res) => {
    res.write('Hola mundo')
    res.end()
})
.listen(8080)

console.log('Escucahndo en el puerto:',8080);

