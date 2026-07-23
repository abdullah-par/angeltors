import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

// Lazy load pages for better performance
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const TermsOfUse = lazy(() => import("../pages/TermsOfUse"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const Disclaimer = lazy(() => import("../pages/Disclaimer"));
const CookiesPolicy = lazy(() => import("../pages/CookiesPolicy"));
const RefundPolicy = lazy(() => import("../pages/RefundPolicy"));
const InvestWithUs = lazy(() => import("../pages/InvestWithUs"));
const InvestorRelation = lazy(() => import("../pages/InvestorRelation"));
const RaiseCapital = lazy(() => import("../pages/RaiseCapital"));
const Membership = lazy(() => import("../pages/Membership"));
const Services = lazy(() => import("../pages/Services"));
const Learn = lazy(() => import("../pages/Learn"));
const BlogDetails = lazy(() => import("../pages/BlogDetails"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const OnboardingProfile = lazy(() => import("../pages/OnboardingProfile"));

// Dashboards
const StartupDashboard = lazy(() => import("../pages/dashboards/StartupDashboard"));
const InvestorDashboard = lazy(() => import("../pages/dashboards/InvestorDashboard"));
const MentorDashboard = lazy(() => import("../pages/dashboards/MentorDashboard"));
const FreemiumDashboard = lazy(() => import("../pages/dashboards/FreemiumDashboard"));

function BuggyTestComponent(): React.ReactNode {
  throw new Error("Previewing ErrorBoundary UI");
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/test-error" element={<BuggyTestComponent />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/onboarding" element={<OnboardingProfile />} />
      <Route path="/dashboard/startup" element={<StartupDashboard />} />
      <Route path="/dashboard/investor" element={<InvestorDashboard />} />
      <Route path="/dashboard/mentor" element={<MentorDashboard />} />
      <Route path="/dashboard/freemium" element={<FreemiumDashboard />} />
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/investor-relation" element={<InvestorRelation />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/invest-with-us" element={<InvestWithUs />} />
        <Route path="/raise-capital" element={<RaiseCapital />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/:slug" element={<BlogDetails />} />
      </Route>
    </Routes>
  );
}
