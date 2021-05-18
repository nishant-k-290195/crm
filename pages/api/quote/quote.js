export var quoteData = {}
const quoteHandler = async (req, res) => {
  quoteData  = req.body
  res.status(200).json({ status: 'success' })
}

export default quoteHandler
