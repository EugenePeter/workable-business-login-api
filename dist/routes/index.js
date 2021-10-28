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
// router.post("/login", login);
// // router.get("/registerCompany", (req, res) => {
// //   console.log("IAM BEING CALLED FROM REGISTER COMPANY");
// //   res.send("hi");
// // });
router.post("/login", controller_1.login);
exports.default = router;
//# sourceMappingURL=index.js.map