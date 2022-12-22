const express = require('express')
const next = require('next');

const dev = process.env.NODE_ENV !=='production'
const port  = 3000;

const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(()=>{
    const server = express()

    server.get("*", (req, res)=>{
        return handle(req, res)
    })
    server.post("*", (req, res)=>{
        return handle(req, res)
    })
    server.listen(port)
}).catch((ex)=>{
    console.log(ex.stack)
    process.exit(1)
})