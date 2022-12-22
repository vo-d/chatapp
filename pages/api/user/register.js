
async function handler(req, res){
    if(req.method === "POST"){
        console.log("New user username",req.body.user, "and password ", req.body.password )
        
    }
}

export default handler;