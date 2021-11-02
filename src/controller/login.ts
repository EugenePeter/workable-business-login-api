import { Request, Response } from "express";

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../models";

dotenv.config();
const { JWTSECRET } = process.env;
export const login = async (req: Request, res: Response) => {
  let user = new User(req.body);

  try {
    const result = await user.login();
    console.log("RESULTS:", result);
    const { email, id, company_name = "" } = result;
    console.log("COMPANY NAME:", company_name);
    if (result) {
      //GENERATE JWT
      const token = jwt.sign(
        {
          company_name: result.company_name,
          email: result.email,
          company_id: id,
        },
        JWTSECRET!,
        { expiresIn: "1d" }
      );
      // //STORE JWT INSIDE COOKIE
      // req.session = {
      //   jwt: token,
      // };

      res
        .status(201)
        .cookie("token", token, {
          httpOnly: true,
          // path: "/",
          secure: true,
          // sameSite: "lax",
          sameSite: "lax",
          domain: "127.0.0.1",
          // expires: new Date(Date.now()),
        })
        .json({
          // token: jwt.sign(
          //   {
          //     company_name: result.company_name,
          //     email: result.email,
          //   },
          //   //@ts-ignore
          //   JWTSECRET,
          //   { expiresIn: "1d" }
          // ),
          company_name,
          email,
          id,
          messagesss: "ako si genio pedro",
          successfuly_signedin: true,
          message: "Welcome",
        });
    }
  } catch (e) {
    res.status(400).send({
      registerSuccess: false,
      errorMessage: e,
    });
  }
};
