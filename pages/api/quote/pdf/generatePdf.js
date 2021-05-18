export default async (req, res) => {
  if(req.method === 'GET'){
    try {
      res.status(200).json({status: "success"})
    }catch(err){
      console.log(`err: ${err}`)
    }
  }
}