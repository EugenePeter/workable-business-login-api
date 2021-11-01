import cookieSession from "cookie-session";
import express, { Request, Response } from "express";
import { login, isAuthorize } from "../controller";

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("welcome");
});

router.post("/login", login);
router.post("/logout", (req: Request, res: Response) => {
  res
    .clearCookie("token", {
      httpOnly: true,
      // path: "/",
      secure: true,
      // sameSite: "lax",
      sameSite: "lax",
      domain: "localhost",
      expires: new Date(Date.now()),
    })
    .json({});
  // req.session = null;
  // res
  //   .status(201)
  //   .cookie("token", "", {
  //     httpOnly: true,
  //     // secure: true,
  //     sameSite: "none",
  //     expires: new Date(1),
  //   })
  // .json({});

  console.log("logging out >>>>>>>>>>>>>>>>>");
});
router.get("/currentuser", isAuthorize);

export default router;
