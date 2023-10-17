export type CompanyCardType = {
  id: number;
  company_name: string;
  short_description: string;
  full_description: string;
  minimum_project_budget: number;
  team_size: number;
  foundation_date: string;
  average_hourly_rate: string;
  location: string;
  software_stack: Array<string>;
  logo: string;
};

export type CompanyCardListType = Array<CompanyCardType>;

export enum TabsTools {
  Frontend = 'frontend',
  Backend = 'backend',
  Mobile = 'mobile',
  Design = 'design',
  Blockchain = 'blockchain'
}