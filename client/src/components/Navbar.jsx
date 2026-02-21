import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { to: "/", label: "Anasayfa" },
    { to: "/about", label: "Hakkımızda" },
    { to: "/articles", label: "Makaleler" },
    { to: "/contact", label: "İletişim" }
];

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/90 border-b border-white/10">
            <div className="hidden md:block border-b border-white/10 text-xs text-slate-300">
                <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <span>📞 +90 (552) 821 17 17</span>
                        <span>📍 Kağıthane / İstanbul</span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-400">
                        <span>LinkedIn</span>
                        <span>Instagram</span>
                        <span>Facebook</span>
                    </div>
                </div>
            </div>

            <nav className="text-white">
                <div className="max-w-6xl mx-auto px-4 py-4 md:py-6">
                    <div className="flex items-center justify-between gap-3">
                        <Link to="/" className="flex items-center gap-3 group min-w-0">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-amber-300/70 overflow-hidden shrink-0">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                                    alt="Avukat"
                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col leading-tight min-w-0">
                                <span className="text-sm md:text-lg font-semibold tracking-[0.16em] md:tracking-[0.2em] uppercase truncate">
                                    Eser Hukuk
                                </span>
                                <span className="text-[9px] md:text-[10px] text-amber-200/70 tracking-[0.2em] md:tracking-[0.3em] uppercase truncate">
                                    Hukuk & Danışmanlık
                                </span>
                            </div>
                        </Link>

                        <div className="hidden md:flex items-center gap-6 text-xs font-semibold tracking-[0.3em] uppercase">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    className="text-slate-200 hover:text-white transition relative after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-amber-300 after:transition-all hover:after:w-full"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center gap-3">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200 hover:bg-amber-300 hover:text-slate-900 transition"
                            >
                                Online Randevu
                            </Link>
                            <Link
                                to="/login"
                                className="text-slate-400 hover:text-white text-sm transition"
                                title="Admin Girişi"
                            >
                                🔒
                            </Link>
                        </div>

                        <button
                            type="button"
                            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/15 text-slate-200"
                            onClick={() => setMobileMenuOpen((prev) => !prev)}
                            aria-label="Mobil menüyü aç"
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? "✕" : "☰"}
                        </button>
                    </div>

                    {mobileMenuOpen && (
                        <div className="md:hidden mt-4 rounded-2xl border border-white/10 bg-slate-900/95 p-4 animate-fade-in-up">
                            <div className="flex flex-col text-sm uppercase tracking-[0.18em]">
                                {navLinks.map((item) => (
                                    <Link
                                        key={item.to}
                                        to={item.to}
                                        className="py-3 px-2 border-b border-white/10 last:border-b-0 text-slate-200 hover:text-amber-200 transition"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                            <Link
                                to="/contact"
                                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-amber-300 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900"
                            >
                                Online Randevu
                            </Link>
                            <Link
                                to="/login"
                                className="mt-3 block text-center text-xs uppercase tracking-[0.2em] text-slate-400"
                            >
                                Admin Girişi
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
