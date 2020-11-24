module.exports = (err, req, res, next) => {
  // console.log(err)
  if (err.status) res.status(err.status).json(err.message)
  else if (err.name === 'SequelizeValidationError') {
    const errors = err.errors.map((e) => e.message)
    res.status(400).json({ message: errors })
  } else { 
    res.status(500).json({ message: "internal server error" })
  }
}