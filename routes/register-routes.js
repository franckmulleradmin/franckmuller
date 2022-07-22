const express = require("express");
const registerControllers = require("../controllers/register-controller");

const router = express.Router();

// router.get("/users", registerControllers.Get_Influncer);
router.post("/influncer", registerControllers.Influncer_Register);
router.post("/Coldleads", registerControllers.Coldleads_Register);
router.post(
  "/MysteryBoxHolders",
  registerControllers.MysteryBoxHolders_Register
);
router.post("/NonWinner", registerControllers.NonWinner_register_Register);
// delete
router.post("/delete_Influncer", registerControllers.Delete_Influncer);
router.post("/delete_Coldleads", registerControllers.Delete_Coldlead);
router.post("/delete_MysteryBox", registerControllers.Delete_Mysterybox);
router.post("/delete_NonWinner", registerControllers.Delete_Nonwinner);
module.exports = router;
