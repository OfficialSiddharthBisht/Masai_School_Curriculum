const {User} = require('../database/user');

async function createUser(req, res) {
  try {
    const user  = req.body;
    let userDoc = await User.create(user);
    res.status(200).send({
        data: userDoc
    })
  } catch (error) {
    console.log(error);
    throw(error);
  }
}

async function getAllUsers(req,res){
    try {
        let users = await User.find();
        res.status(200).send({
        data: users
        })
    } catch (error) {
        console.log(error);
        throw(error);
    }
}

module.exports = {
    createUser,
    getAllUsers
}