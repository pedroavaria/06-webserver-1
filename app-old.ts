import http from 'http'

http.createServer((req,res) => {

    res.write('Hola Mundo')

    res.end()
})
.listen(8080)

console.log('Escucahndo en el puerto:',8080);

