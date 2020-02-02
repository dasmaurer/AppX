function postComment(req, res) {
  ////// D1
  console.log(res.body);
  res.status(200).json({
    result: "Created"
  });
}

function commentID(req, res) {
  //////// D2
  res.status(200).json([{}]);
}

module.exports = {
  postComment: postComment,
  commentID: commentID
};
