"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var companySchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
companySchema.statics.build = function (attrs) {
    return new exports.Company(attrs);
};
exports.Company = mongoose_1.default.model("Companies", companySchema);
// const company = Company.build({
//   company_name: "workable",
//   email: "test@gmail.com",
//   password: "123",
// });
//# sourceMappingURL=mongoose.js.map