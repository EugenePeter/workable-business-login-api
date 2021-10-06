import mongoose from "mongoose";

// An interface that describes the properties that are required to create a new company
interface CompanyAtrtibutes {
  email: string;
  password: string;
}

// An interface that describes the properties that a company model has
interface CompanyModel extends mongoose.Model<CompanyDocument> {
  build(attrs: CompanyAtrtibutes): CompanyDocument;
}

// An interface that describes the properties that a company document has
interface CompanyDocument extends mongoose.Document {
  email: string;
  password: string;
  company_name: string;
}

const companySchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    company_name: String,
  },
  {
    writeConcern: {
      w: "majority",
      j: true,
      wtimeout: 1000,
    },
  }
);

companySchema.statics.build = (attrs: CompanyAtrtibutes) => {
  return new Company(attrs);
};

export const Company = mongoose.model<CompanyDocument, CompanyModel>("Companies", companySchema);
