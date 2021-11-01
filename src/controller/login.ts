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
      // console.log("HEADERS:", req.session);
      //GENERATE JWT
      const token = jwt.sign(
        {
          company_name: result.company_name,
          email: result.email,
          company_id: id,
        },
        //@ts-ignore
        JWTSECRET,
        { expiresIn: "1d" }
      );
      // //STORE JWT INSIDE COOKIE
      // req.session = {
      //   jwt: token,
      // };

      // req.session = {
      //   token: token,
      // };

      // req.session = {
      //   token: token,
      // };

      // res.status(201).json({
      //   yay: "yay",
      // });

      res
        .status(201)
        .cookie("token", token, {
          httpOnly: true,
          // path: "/",
          secure: true,
          // sameSite: "lax",
          sameSite: "lax",
          domain: "localhost",
        })
        .json({
          token: jwt.sign(
            {
              company_name: result.company_name,
              email: result.email,
            },
            //@ts-ignore
            JWTSECRET,
            { expiresIn: "1d" }
          ),
          company_name,
          email,
          id,
          messagesss: "ako si genio pedro",
          successfuly_signedin: true,
          message: "Welcome",
        });
    }
    // res.json({
    //   token: jwt.sign(
    //     {
    //       company_name: result.company_name,
    //       email: result.email,
    //     },
    //     //@ts-ignore
    //     JWTSECRET,
    //     { expiresIn: "1d" }
    //   ),
    //   company_name,
    //   email,
    //   id,
    //   messagesss: "ako si genio",
    //   successfuly_signedin: true,
    //   message: "Welcome",
    // });
  } catch (e) {
    res.status(400).send({
      registerSuccess: false,
      errorMessage: e,
    });
  }
};

const vacancies = [
  {
    software_engineer: {
      id: "",
      company_id: "",
      applicants: ["applicant_1", "applicant_1", "applicant_1"],
    },
  },
];

const company = {
  company_id: "",
  vacancies: ["vancancy_id_here", "vancancy_id_here", "vancancy_id_here"],
};

const applicant = {
  applicant_id: "",
  applications: ["vacancy_id_here", "vacancy_id_here", "vacancy_id_here"],
};
