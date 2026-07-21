import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function DefaultLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-angeltors-bg text-angeltors-muted">
      <Header />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      {pathname === "/" && <Footer />}
    </div>
  );
}
