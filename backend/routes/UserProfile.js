const express = require("express");
const router = express.Router();
const { DaftarUser, verifyEmail } = require("../controller/UserController.js");
router.post("/daftar", DaftarUser);
router.get("/verify-email/:tokenAktif", verifyEmail);
module.exports = router;
