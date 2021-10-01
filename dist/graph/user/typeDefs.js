"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_type_defs = void 0;
var apollo_server_express_1 = require("apollo-server-express");
exports.user_type_defs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type CompanyExist {\n    company_name: String!\n    email: String!\n  }\n\n  extend type Query {\n    doesEmailExist(email: String): CompanyExist\n  }\n\n  type Company {\n    id: ID!\n    company_name: String!\n  }\n\n  input AddCompanyParams {\n    company_name: String!\n    email: String!\n    password: String!\n  }\n\n  type Mutation {\n    createCompany(params: AddCompanyParams): Company!\n  }\n"], ["\n  type CompanyExist {\n    company_name: String!\n    email: String!\n  }\n\n  extend type Query {\n    doesEmailExist(email: String): CompanyExist\n  }\n\n  type Company {\n    id: ID!\n    company_name: String!\n  }\n\n  input AddCompanyParams {\n    company_name: String!\n    email: String!\n    password: String!\n  }\n\n  type Mutation {\n    createCompany(params: AddCompanyParams): Company!\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=typeDefs.js.map