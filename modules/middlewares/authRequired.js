const jwt = require("jsonwebtoken")

exports.authRequired = (req, res, next) => {
  const authorization = req.header.authorization;
  if(!authorization) {
    return res.status(402).json({error: "please login"});
  }
  const token = authorization.split("")[1];
  if (!token) {
      return res.status(402).json({ error: "please login" });
  }

  const user = jwt.verify(token,
   " 8189adcfd101a9ced58634b2e51a8346cd09b315451e609d9733baf6c711c584"
    );

    req.user = user;

  next();
};































// const jwt = require("jsonwebtoken");

// const authRequired = (req, res, next) => {
//   console.log(req.headers);
//   const authorization = req.headers.authorization;
//   if (!authorization) {
//     return res.status(402).json({ error: "Please login to use this platform" });
//   }

//   const token = authorization.split(" ")[1];
//   if (!token) {
//     return res.status(402).json({ error: "Please login" });
//   }
//   let user = jwt.verify(
//     token,
//     "8189adcfd101a9ced58634b2e51a8346cd09b315451e609d9733baf6c711c584"
//   );

//   req.user = user;

//   console.log(user);
//   next();
// };

// module.exports = {
//   authRequired,
// };