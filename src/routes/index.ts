import express from "express";
import { login } from "../controller";

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("welcome");
});

router.post("/login", login);
// router.get("/registerCompany", (req, res) => {
//   console.log("IAM BEING CALLED FROM REGISTER COMPANY");
//   res.send("hi");
// });

router.post("/login", login);

export default router;
