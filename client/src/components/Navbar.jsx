import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-law-blue text-white shadow-md font-sans">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-24">

                    {/* SOL TARAF: Fotoğraf ve İsim */}
                    <div className="flex items-center gap-4">
                        {/* Profil Fotoğrafı (Yuvarlak) */}
                        <div className="w-12 h-12 rounded-full border-2 border-white/50 overflow-hidden">
                            {/* Buraya kendi fotoğrafını koyabilirsin, şimdilik placeholder */}
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                                alt="Avukat"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* İsim ve Ünvan */}
                        <div className="flex flex-col">
                            <span className="text-lg font-bold tracking-wide uppercase leading-tight">
                                AV. ADI SOYADI
                            </span>
                            <span className="text-[10px] text-gray-300 tracking-[0.2em] uppercase">
                                HUKUK BÜROSU
                            </span>
                        </div>
                    </div>

                    {/* SAĞ TARAF: Menü Linkleri */}
                    <div className="hidden md:flex space-x-8 text-xs font-bold tracking-widest uppercase">
                        <Link to="/" className="hover:text-gray-300 transition pb-1 border-b-2 border-transparent hover:border-white">ANASAYFA</Link>
                        <Link to="/about" className="hover:text-gray-300 transition pb-1 border-b-2 border-transparent hover:border-white">HAKKIMIZDA</Link>
                        <Link to="/articles" className="hover:text-gray-300 transition pb-1 border-b-2 border-transparent hover:border-white">MAKALELER</Link>
                        <Link to="/contact" className="hover:text-gray-300 transition pb-1 border-b-2 border-transparent hover:border-white">İLETİŞİM</Link>

                        {/* Admin Girişi (Kilit İkonu) */}
                        <Link to="/login" className="text-white/40 hover:text-white text-sm" title="Admin Girişi">🔒</Link>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;