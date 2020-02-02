function get(req, res) {
  const users = [
    {
      id: 1,
      username: "mgrozado",
      firstName: "Maximiliano",
      lastName: "Rozado"
    },
    {
      id: 2,
      username: "cesmunoz",
      firstName: "Cesar",
      lastName: "Muñoz"
    },
    {
      id: 3,
      username: "jsmith",
      firstName: "John",
      lastName: "Smith"
    }
  ];

  res.status(200).json(users);
}

function saveUser(req, res) {
  console.log(req.body);
  res.status(201).json({
    result: "Created"
  });
}

function removeUser(req, res) {
  //////////  A1
  res.status(200).json({
    success: true
  });
}

function modifyUser(req, res) {
  /////////// A2
  res.status(200).json({
    success: true
  });
}

function getUserID(req, res) {
  ////////// A3
  res.status(200).json({
    id: 1,
    username: "mgrozado",
    firstName: "Maximiliano",
    lastName: "Rozado"
  });
}

module.exports = {
  get,
  saveUser,
  removeUser,
  modifyUser,
  getUserID
};
