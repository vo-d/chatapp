//custom express server
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000

const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(()=>{
    const server = express(); 

    server.get("/", (req, res)=>{
        console.log('good')
        return app.render(req, res, '/', req.query)
    })
    server.get("*", (req, res)=>{
        return handle(req, res)
    })
    server.listen(port,(err)=>{
        if (err) throw err
        console.log("server ready!")
    })
}).catch((ex)=>{
    console.error(ex.stack)
    process.exit(1)
})