const { Router } = require("express");
const router = Router();
const showErrors = require("../../messageConsole");
const bcrypt = require("bcryptjs");

router.post("/", (req, res) => {
  try {
    const { password } = req.body;
    let passwordHash = bcrypt.hashSync(password, 8);
    return res.status(200).send(passwordHash);
  } catch (e) {
    showErrors("/hash", e);
    return 404;
  }
});

module.exports = router;
