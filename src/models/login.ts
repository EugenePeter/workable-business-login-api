import bcrypt from "bcrypt";
import { Company } from "../utils";

interface IData {
  company_name: string;
  email: string;
  password: string;
  id?: string;
}

interface Event {
  data: IData;
  errors: string[];
}

export class User<T extends Event> {
  data: T["data"];
  errors: T["errors"];
  constructor(data: any) {
    this.data = data;
    this.errors = [];
    console.log("DATA", this.data);
  }

  async login() {
    try {
      const email_to_check = this.data.email;
      let user = await Company.findOne({ email: email_to_check });
      //@ts-ignore
      user && user?.email && console.log("doesEmailExist result:", user.email);
      if (!user) {
        this.errors.push("Username does not exist");
        throw this.errors;
      }

      if (user && user?.email && bcrypt.compareSync(this.data.password, user.password)) {
        this.data = user;
        console.log("THIS DATA:", this.data);
        return this.data;
      } else {
        this.errors.push("Login credentials does not match");
        throw this.errors;
      }
    } catch (e) {
      console.log("LOGIN ERROR", e);
      throw this.errors;
    }
  }
}
