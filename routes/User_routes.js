const express = require("express");
const routes = express.Router();
const CryptoUserModel = require(".././models/Users_Keys");

routes.post("/userInfo", async (req, res) => {
  const cryptoDatas = new CryptoUserModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    privateKey: req.body.privateKey,
    exchange: req.body.exchange,
    cryptoName: req.body.cryptoName,
  });
  try {
    const cryptoDataToSave = await cryptoDatas.save();
    res.status(200).json(cryptoDataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

routes.get("/userInfo", async (req, res) => {
  try {
    const cryptoDataToSave = await CryptoUserModel.find();
    res.json(cryptoDataToSave);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

routes.get("/userInfo/:id", async (req, res) => {
  try {
    const cryptoDataToSave = await CryptoUserModel.findById(req.params.id);
    res.json(cryptoDataToSave);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

routes.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const cryptoDataToSave = await CryptoUserModel.findByIdAndDelete(id);
    res.send(
      `User with the name of: ${cryptoDataToSave.firstName} ${cryptoDataToSave.lastName} does not exist on our system`
    );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = routes;
