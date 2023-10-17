import { create } from "apisauce";

const API = create({ baseURL: "https://api.agiledreamers.com" });

const getCompanies = () => {
  return API.get("/user-profile/all_companies/");
};

export default {
  getCompanies,
};
