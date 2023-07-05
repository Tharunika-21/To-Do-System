const mongoose = require("mongoose");
const userSchema = require("../schemas/userSchema");

const User = mongoose.model("users", userSchema);

async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send("Error in User Retrieval");
  }
}

const getUserById = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({
      message: "User not found",
      error: error,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.find(req.body.filterObj);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({
      message: "error in finding the user",
      error: error,
    });
  }
};

const newUser = async (req, res) => {
  console.log("new user called");
  try {
    const userObj = new User({
      Image: req.body.Image,
      Name: req.body.Name,
      Email: req.body.Email,
      Phone: req.body.Phone,
      Dob: req.body.Dob,
      Location: req.body.Location,
      Gender: req.body.Gender,
      Address: req.body.Address,
    });
    const newUser = await userObj.save();
    res
      .status(201)
      .send({ message: "New user created successfully", newUser: newUser });
  } catch (error) {
    console.log("Error in inserting the document : ", error);
    res.status(400).send("Error in inserting document");
  }
};

const patchUpdateUser = async (req, res) => {
  const result = await User.updateOne(
    { _id: req.params.id },
    {
      $set: req.body.updateObject,
    }
  );
  res.status(200).send(updatedUser)
};

const deleteUser = async (req, res) => {
  try {
    const result = await User.deleteOne({ _id: req.params.id });
    res.status(200).send({message : "deletion operation done",
    result : result});
  } catch (error) {
    res.status(400).send({
      message: "Error in deleting user",
      error: error,
    });
  }
};

const deleteMultipleUsers = async (req, res)=>{
  try {
    const result = await User.deleteMany(req.body.filterObj)
    res.status(200).send({
      message : "Deletion operation successful",
      result : result
    })
  } catch (error) {
    res.status(400).send({
      message: "Error in deleting user",
      error: error,
    });
  }
}

module.exports = {
  getAllUsers: getAllUsers,
  getUser: getUser,
  getUserById: getUserById,
  newUser: newUser,
  patchUpdateUser: patchUpdateUser,
  deleteUser : deleteUser,
  deleteMultipleUsers : deleteMultipleUsers
};
