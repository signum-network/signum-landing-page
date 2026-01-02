import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { BackgroundLogo } from "../components/BackgroundLogo";

export default function MainLayout() {
  return (
    <div className="relative isolate min-h-screen flex flex-col bg-white text-neutral-900 font-sans">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-visible">
        <BackgroundLogo />
      </div>
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
