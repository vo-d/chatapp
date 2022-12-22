import mongoose from 'mongoose'
import bcrypt from'bcrypt';
import {MONGODB} from '../data/credentials.js'
const mongoUri = `mongodb+srv://${MONGODB.dai.user}:${MONGODB.dai.login}@${MONGODB.dai.cluster}/?retryWrites=true&w=majority`;

const userSchema = mongoose.Schema({
    name:{
        type: String,
        default: '',
        required: true
    },
    password:{
        type: String,
        default: true,
        required: true
    }
    
})

userSchema.methods.findUser = function(username, callback){
    this.findOne({user:username},(err, doc)=>{
        if (doc){
            console.log('user found')
            callback(username)
        }
        else{
            callback(null)
        }
    })
}

userSchema.methods.validPassword = function(password, callback){
    this.findOne({user:username},(err, doc)=>{
        if (doc){
            console.log('user found')
            if(bcrypt.compareSync(password, this.password)){
                callback(username)
            }
            else{
                callback(null)
            }
        }
        else{
            callback(null)
        }
    })
    
}
mongoose.connect(uri)
const User = mongoose.model("user", userSchema)

async function seedUser(username, password){
    await mongoose.connect(mongoUri).catch(console.log);
    let newUser = new User({
        user: username,
        password: bcrypt.hashSync(password, bcrypt.genSalt(8), null)
    });
    return result =  await newUser.save()
    
}

module.exports ={
    User: User,
    seedUser: seedUser
}