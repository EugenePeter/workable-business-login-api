import cookieSession from "cookie-session";
import express, { Request, Response } from "express";
import { login, isAuthorize } from "../controller";

const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("welcome");
});

router.post("/login", login);
router.get("/logout", (req: Request, res: Response) => {
  res
    .clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .json({});
  console.log("logging out >>>>>>>>>>>>>>>>>");
});
router.get("/currentuser", isAuthorize);

export default router;
