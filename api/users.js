const express = require("express");
const router = express.Router();
const prisma = require("../prisma/client");

router.get("/users", async (req, res, next) => {
  console.log("reached /users");
  try {
    const users = await prisma.user.findMany();
    res.send("users");
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
