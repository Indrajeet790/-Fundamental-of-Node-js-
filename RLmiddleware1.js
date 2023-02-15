// Apply Middleware in different file
module.exports = reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("please provide your age");
  } else if (req.query.age < 18) {
    resp.send("you cannot access this page");
  } else {
    next();
  }
};
