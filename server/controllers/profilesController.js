function getProfiles(req, res) {
  /////// E1
  res.status(200).json([
    {
      id: 1,
      userName: "mrozado",
      firstName: "Maximiliano",
      lastName: "Rozado"
    },
    {
      id: 2,
      userName: "cesmunoz",
      firstName: "Cesar",
      lastName: "Muñoz"
    },
    {
      id: 3,
      userName: "Johnsmith",
      firstName: "John",
      lastName: "Smith"
    }
  ]);
}

module.exports = {
  getProfiles: getProfiles
};
