const quoteHandler = async (req, res) => {
  global.quoteData = req.body
  res.status(200).json({ status: 'success' })
}

export default quoteHandler