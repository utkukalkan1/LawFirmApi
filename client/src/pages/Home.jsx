import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { http } from "../shared/api/http";

const Home = () => {
    const [latestArticles, setLatestArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await http.get("/api/Articles");
                setLatestArticles(response.data.slice(0, 3));
            } catch (err) {
                console.error(err);
            }
        };
        fetchArticles();
    }, []);

    return (
        <div className="bg-slate-950 text-white">
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1453945619913-79ec89a82c51?auto=format&fit=crop&w=1800&q=80"
                        alt="Eser Hukuk"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-950/70"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
                </div>

                <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 animate-fade-in">
                    <div className="max-w-2xl space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 px-4 py-2 text-xs uppercase tracking-[0.4em] text-amber-200/80">
                            Güven • Şeffaflık • Sonuç Odaklılık
                        </div>
                        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                            Hukuki süreçlerde stratejik rehberlik sunan butik bir hukuk bürosu.
                        </h1>
                        <p className="text-lg text-slate-200 leading-relaxed">
                            İstanbul merkezli ekibimiz; bireysel ve kurumsal müvekkiller için hızlı, anlaşılır ve
                            güven veren çözümler üretir. Her dosyada detaylı analiz, güçlü iletişim ve şeffaf bir
                            süreç yönetimi sunarız.
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                to="/contact"
                                className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-300/30"
                            >
                                Hemen Görüşelim
                            </Link>
                            <Link
                                to="/articles"
                                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-amber-300 hover:text-amber-200"
                            >
                                Makaleleri İncele
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 text-sm text-slate-300">
                            {[
                                { label: "Yıllık Tecrübe", value: "18+" },
                                { label: "Aktif Dosya", value: "240+" },
                                { label: "Başarı Oranı", value: "%92" },
                                { label: "Müşteri Memnuniyeti", value: "4.9/5" }
                            ].map((item) => (
                                <div key={item.label} className="space-y-2">
                                    <div className="text-2xl font-semibold text-white">{item.value}</div>
                                    <div className="text-xs uppercase tracking-[0.3em]">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-900 border-y border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Kişiye Özel Strateji",
                                text: "Her dava için özelleştirilmiş bir yol haritası çıkarır, hukuki süreci anlaşılır şekilde yönetiriz."
                            },
                            {
                                title: "Şeffaf İletişim",
                                text: "Tüm süreç boyunca erişilebilir olur, düzenli bilgilendirme ve raporlama sağlarız."
                            },
                            {
                                title: "Hızlı Geri Dönüş",
                                text: "Ön değerlendirme taleplerine 24 saat içinde yanıt vererek süreci hızlandırırız."
                            }
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 shadow-lg shadow-slate-950/30 transition duration-300 hover:-translate-y-2 hover:border-amber-300/60"
                            >
                                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                                <p className="text-sm text-slate-300 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-slate-950">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                        <div className="space-y-3">
                            <p className="text-xs uppercase tracking-[0.4em] text-amber-200/70">Güncel İçerikler</p>
                            <h2 className="text-3xl font-semibold">Hukuki Makaleler</h2>
                            <p className="text-slate-300 max-w-xl">
                                Güncel içtihatlar, mevzuat değişiklikleri ve pratik rehberlerimizle süreci daha
                                kolay takip edin.
                            </p>
                        </div>
                        <Link
                            to="/articles"
                            className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.4em] text-white/80 transition hover:border-amber-300 hover:text-amber-200"
                        >
                            Tüm Makaleler
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {latestArticles.length === 0 ? (
                            <div className="col-span-full text-slate-400">Makaleler yükleniyor...</div>
                        ) : (
                            latestArticles.map((article) => (
                                <article
                                    key={article.id}
                                    className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-amber-300/60"
                                >
                                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                                        {new Date(article.createdDate).toLocaleDateString("tr-TR")}
                                    </p>
                                    <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-amber-200 transition">
                                        <Link to={`/article/${article.id}`}>{article.title}</Link>
                                    </h3>
                                    <p className="mt-3 text-sm text-slate-300 leading-relaxed line-clamp-4">
                                        {article.summary}
                                    </p>
                                    <Link
                                        to={`/article/${article.id}`}
                                        className="mt-6 inline-flex items-center text-xs uppercase tracking-[0.3em] text-amber-200/80 hover:text-amber-200 transition"
                                    >
                                        Devamını Oku →
                                    </Link>
                                </article>
                            ))
                        )}
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 text-slate-900">
                <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold">İlk görüşmeyi planlayalım.</h2>
                        <p className="text-sm text-slate-700">
                            Dosyanız için hızlı bir ön değerlendirme yapmak ve yol haritası çıkarmak için buradayız.
                        </p>
                    </div>
                    <Link
                        to="/contact"
                        className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
                    >
                        İletişime Geç
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
