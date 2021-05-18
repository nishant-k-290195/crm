export default async function sendEmailHandler (req, res){
  if (req.method === 'GET') {
    try{
      res.status(200).json({ status: 'success' })
    }
    catch(err){
      res.send(err)
    }  
  }
}