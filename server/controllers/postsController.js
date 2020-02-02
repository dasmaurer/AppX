//// C1
function getPosts(req, res) {
  res.status(200).json([{}]);
}
/////// C2
function postsID(req, res) {
  res.status(200).json([{}]);
}
///////// C3
function postsLike(req, res) {
  console.log(req.body);
  res.status(201).json({
    result: "Liked"
  });
}

module.exports = {
  getPosts: getPosts,
  postsID: postsID,
  postsLike: postsLike
};
