const express = require ('express')

const app = express()

app.get('/', (request, response) =>{
    response.json("Hola GET")
})

app.POST('/', (request, response) =>{
    response.json("Hola POST")
})
app.PU('/', (request, response) =>{
    response.json("Hola PUT")
})
app.PATCH('/', (request, response) =>{
    response.json("Hola PATCH")
})
app.DELETE('/', (request, response) =>{
    response.json("Hola DELETE")
})

/**
 * FUNCIONALIDAD
 * 
 */

//http://localhost:3000/
app.listen(3000, () => {
    console.log('listening on port 3000')
})