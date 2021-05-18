export default async function viewPdfHandler(req, res) {
  if (req.method === 'GET') {
    try {
      res.status(200).json({status: "success"})
    }catch(err){
      res.send(err)
    }
  }
}