"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controller_1 = require("../controller");
var router = express_1.default.Router();
/* GET home page. */
router.get("/", function (req, res, next) {
    res.send("welcome");
});
router.post("/login", controller_1.login);
router.post("/logout", function (req, res) {
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
router.get("/currentuser", controller_1.isAuthorize);
exports.default = router;
//# sourceMappingURL=index.js.map