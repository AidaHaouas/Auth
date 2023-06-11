const createFullName = async (req, res, next) => {
  if (req.body.firstName && req.body.lastName) {
    req.body.fullName = req.body.firstName + " " + req.body.lastName;
    next();
  } else {
    res.status(400).send("Please Give Your First And Last Name");
  }
};
module.exports = createFullName;
