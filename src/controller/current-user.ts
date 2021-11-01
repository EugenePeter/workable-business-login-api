import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { addCatchUndefinedToSchema } from "graphql-tools";

dotenv.config();
const { JWTSECRET } = process.env;
interface ICookies extends Request {
  [key: string]: any;
}

interface user_payload {
  company_name: string;
  email: string;
  isAuthorize: authorized;
  company_id: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: user_payload;
    }
  }
}
type authorized = boolean;
declare global {
  namespace Express {
    interface Request {
      isAuthorize: authorized;
      company_id: string;
    }
  }
}

export const isAuthorize = async (req: ICookies, res: Response, next: NextFunction) => {
  const { cookies } = req;
  console.log("COOKIES:", cookies);
  if (!cookies.name) next();
  try {
    const { company_id, company_name, email } = jwt.verify(
      cookies.token,
      JWTSECRET!
    ) as user_payload;
    res.status(200).json({ isAuthorize: true, company_id, company_name, email });
  } catch (e) {
    res.status(200).json({ isAuthorize: false });
  }
  next();
};
