import React, { ReactElement } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import PagesWrapper from "../PagesWrapper";
import ProvidersPage from "../ProvidersPage";
import CompanyPage from "../CompanyPage";
import ServicesPage from "../ServicesPage";
import StartUpsPage from "../StartUpsPage";
import AboutUsPage from "../AboutUsPage";
import DevelopersPage from "../DevelopersPage";

export enum PathNames {
  Home = "/",
  Providers = "/providers",
  CompanyPage = "/company-page",
  ForStartUps = "/startups",
  Services = "/services",
  Developers = "/developers",
  AboutUs = "/about",
}

const MOCK_CARD = {
  id: 1,
  companyName: "Сapix",
  companyDescription:
    "Fintech professional with decades of experience in the capital and financial markets",
  budget: 10000,
  teamSize: 5,
  foundationDate: 1991,
  averageHourlyRate: "150",
  location: "Melbourne",
};

const MOCK_CARD_LIST = [MOCK_CARD, MOCK_CARD, MOCK_CARD, MOCK_CARD];

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathNames.Home} element={<PagesWrapper />}>
          <Route path={PathNames.Providers} element={<ProvidersPage />} />
          <Route path={PathNames.CompanyPage} element={<CompanyPage />} />
          <Route path={PathNames.Services} element={<ServicesPage />} />
          <Route path={PathNames.ForStartUps} element={<StartUpsPage />} />
          <Route path={PathNames.AboutUs} element={<AboutUsPage />} />
          <Route path={PathNames.Developers} element={<DevelopersPage />} />
        </Route>

        <Route path="*" element={<Navigate to={PathNames.Providers} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
