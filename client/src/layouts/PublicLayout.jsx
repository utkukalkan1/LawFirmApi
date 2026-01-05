import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <footer className="bg-slate-950 border-t border-white/10 text-slate-400 py-10 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Eser Hukuk ve Danışmanlık. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-slate-500">
            <span>Gizlilik</span>
            <span>KVKK</span>
            <span>Çerezler</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
