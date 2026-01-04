import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <footer className="bg-slate-900 text-slate-400 py-8 text-center mt-auto">
        <p>&copy; {new Date().getFullYear()} Eser Hukuk ve Danışmanlık - Tüm Hakları Saklıdır.</p>
      </footer>
    </div>
  );
}
