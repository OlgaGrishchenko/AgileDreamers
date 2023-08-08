export type CompanyCardType = {
  id: number;
  companyName: string;
  companyDescription: string;
  fullCompanyDescription: string;
  budget: number;
  teamSize: number;
  foundationDate: number;
  averageHourlyRate: string;
  location: string;
  softwareStack: Array<string>;
  avatar: string;
};

export type CompanyCardListType = Array<CompanyCardType>;

export enum TabsTools {
  Frontend = 'frontend',
  Backend = 'backend',
  Mobile = 'mobile',
  Design = 'design',
  Blockchain = 'blockchain'
}