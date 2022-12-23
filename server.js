const {User} = require('./models/user_models.js')
const express = require('express')
const next = require('next');
const {MONGODB} = require ('./data/credentials.js')
const mongoUri = `mongodb+srv://${MONGODB.dai.user}:${MONGODB.dai.login}@${MONGODB.dai.cluster}/?retryWrites=true&w=majority`;



const dev = process.env.NODE_ENV !=='production'
const port  = 3000;

const app = next({dev});
const handle = app.getRequestHandler();

const setReqModel = (req, res, next)=>{
    req.model = User
    next()
}

app.prepare().then(()=>{
    const server = express()

    server.use('/api/user/register',setReqModel)

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