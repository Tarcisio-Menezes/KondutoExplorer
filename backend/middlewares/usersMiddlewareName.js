module.exports = (err, _req, res, _next) => {
  if (err.code === 'invalidName') {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }

  return res.status(500).json({ message: 'Critcal Error :(' });
};
