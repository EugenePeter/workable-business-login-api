import express from "express";
import dotenv from "dotenv";
import expressPlayground from "graphql-playground-middleware-express";
import { initializeApolloServer } from "./graph";
import indexRouter from "./routes";
import cors from "cors";

import mongoose from "mongoose";
dotenv.config();
const {
  CONNECTIONSTRING = "mongodb+srv://workableCompanyList:0HCuQLITK1ncdo3v@cluster0.khdnm.mongodb.net/workable-signup-api?retryWrites=true&w=majority",
} = process.env;

const startServer = async () => {
  const app = express();
  // app.get("/", expressPlayground({ endpoint: "/graphql" }));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: false,
  };
  app.use(cors(corsOptions));
  app.use("/", indexRouter);
  app.get("/", (req, res) => {
    res.send("welcome");
  });

  app.get("/user-email", (req, res) => {
    res.send("welcome");
  });

  try {
    await mongoose.connect(CONNECTIONSTRING);
    console.log("CONNECTED TO MONGODB");
  } catch (e) {
    console.log("error:", e);
  }
  initializeApolloServer(app);
  app.listen(process.env.PORT, () => {
    console.log(`apps is running on PORT: ${process.env.PORT}`);
  });
};

startServer();
