const express = require("express");
const authMiddelware = require("../middlewares/authMiddleware");
const {
  getDonarsListController,
  getHospitalsListController,
  getOrgsListController,
  deleteDonarController,
} = require("../controllers/adminController");
const adminMiddelware = require("../middlewares/adminMiddelware");

//router object
const router = express.Router();

//routes

//get || donar list
router.get(
  "/donar-list",
  authMiddelware,
  adminMiddelware,
  getDonarsListController
);

//get || Hospital list
router.get(
  "/hospital-list",
  authMiddelware,
  adminMiddelware,
  getHospitalsListController
);

//get || Organisation list
router.get("/org-list", authMiddelware, adminMiddelware, getOrgsListController);

//DELETE DONAR || GET
router.delete(
  "/delete-donar/:id",
  authMiddelware,
  adminMiddelware,
  deleteDonarController
);

//export
module.exports = router;
