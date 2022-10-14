const getUsers = (req, res) => {
    // call to DB to get users
    res.send(users)
}

module.exports = {
    getUsers
}