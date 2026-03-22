const express = require("express");
const {
  handleGetAllUsers,
  handleGetUserByID,
  handlePostUser,
} = require("../controllers/user");
const getAllUsers = require("../controllers/user").getAllUsers;

const router = express.Router();

router.get("/", handleGetAllUsers);
router.get("/:id", handleGetUserByID);
router.post("/", handlePostUser);
router;

module.exports = router;
