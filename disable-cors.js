module.exports = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  // res.header('Access-Control-Request-Headers', 'authorization');
  // res.header('Access-Control-Allow-Methods', 'GET');
  // res.header('Access-Control-Request-Methods', 'GET');
  next()
}
