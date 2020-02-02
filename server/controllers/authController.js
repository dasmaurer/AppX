function postLogIn(req, res) {
  console.log(req.body);
  res.status(201).json({
    result: "Login successful"
  });
}
//////// sólo me tira login ´succesful cuando hago un post desde postman
function postLogOut(req, res) {
  console.log(req.body);
  res.status(201).json({
    result: "Loged out"
  });
}

module.exports = {
  postLogIn,
  postLogOut
};
