import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../models";
dotenv.config();
const { JWTSECRET = "secthequickbrownfoxjumpsovertheheadofthelazydoget" } = process.env;

export const login = async (req: any, res: any) => {
  let user = new User(req.body);

  try {
    const result = await user.login();
    console.log("RESULTS:", result);
    const { email, id, company_name = "" } = result;
    console.log("COMPANY NAME:", company_name);
    if (result) {
      res.json({
        token: jwt.sign(
          {
            company_name: result.company_name,
            email: result.email,
          },
          JWTSECRET,
          { expiresIn: "1d" }
        ),
        company_name,
        email,
        id,
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
