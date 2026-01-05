import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/80 border-b border-white/10">
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
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-wrap items-center justify-between gap-6 py-6">
                        <Link to="/" className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full border border-amber-300/70 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                                    alt="Avukat"
                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="text-lg font-semibold tracking-[0.2em] uppercase">
                                    Eser Hukuk
                                </span>
                                <span className="text-[10px] text-amber-200/70 tracking-[0.3em] uppercase">
                                    Hukuk & Danışmanlık
                                </span>
                            </div>
                        </Link>

                        <div className="flex flex-wrap items-center gap-6 text-xs font-semibold tracking-[0.3em] uppercase">
                            <Link
                                to="/"
                                className="text-slate-200 hover:text-white transition relative after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-amber-300 after:transition-all hover:after:w-full"
                            >
                                Anasayfa
                            </Link>
                            <Link
                                to="/about"
                                className="text-slate-200 hover:text-white transition relative after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-amber-300 after:transition-all hover:after:w-full"
                            >
                                Hakkımızda
                            </Link>
                            <Link
                                to="/articles"
                                className="text-slate-200 hover:text-white transition relative after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-amber-300 after:transition-all hover:after:w-full"
                            >
                                Makaleler
                            </Link>
                            <Link
                                to="/contact"
                                className="text-slate-200 hover:text-white transition relative after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-amber-300 after:transition-all hover:after:w-full"
                            >
                                İletişim
                            </Link>
                        </div>

                        <div className="flex items-center gap-3">
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
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
