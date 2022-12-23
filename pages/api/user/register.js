import mongoose from 'mongoose';
import {seedUser} from '../../../models/user_models'
const {MONGODB} = require ('../../../data/credentials.js')
const mongoUri = `mongodb+srv://${MONGODB.dai.user}:${MONGODB.dai.login}@${MONGODB.dai.cluster}/?retryWrites=true&w=majority`;


async function handler(req, res){
    if(req.method === "POST"){
        mongoose.connect(mongoUri, {dbName: 'test'})
        console.log("New user username",req.body.user, "and password ", req.body.password )

    }
}

export default handler;