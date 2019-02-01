require('dotenv').config()
const express = require('express')
const {json}= require('body-Parser')
const massive= require('massive')
const {getHouses, postHouse, deleteHouse, editHouse} = require('./controller')

const port = 3001

const app = express()
app.use(json())

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        console.log('database connected')
        app.set('db', dbInstance);
    }).catch(err=>{
        console.log(err)
    })


app.get(`/api/houses`, getHouses)
app.post(`/api/house`, postHouse)
app.delete(`/api/house/:id`, deleteHouse)
app.put(`/api/house/:id`, editHouse)


app.listen(port, ()=>{
    console.log(`Listening on ${port}`)
})