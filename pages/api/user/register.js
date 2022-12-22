
async function handler(req, res){
    if(req.method === "POST"){
        console.log(req.body.user)
    }
}

export default handler;