import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfUse from "../pages/TermsOfUse";
import RefundPolicy from "../pages/RefundPolicy";
import Disclaimer from "../pages/Disclaimer";
import CookiesPolicy from "../pages/CookiesPolicy";
import InvestorRelation from "../pages/InvestorRelation";
import Membership from "../pages/Membership";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/investor-relation" element={<InvestorRelation />} />
        <Route path="/membership" element={<Membership />} />
      </Route>
    </Routes>
  );
}
