import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { http } from "../shared/api/http";

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await http.get("/api/Articles");
                setArticles(response.data);
            } catch (err) {
                console.error("Hata:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchArticles();
    }, []);

    return (
        <div className="bg-slate-950 text-white">
            <section className="border-b border-white/10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
                    <p className="text-xs uppercase tracking-[0.32em] sm:tracking-[0.5em] text-amber-200/70 mb-4">Makaleler</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">Hukuki içgörüler ve pratik rehberler.</h1>
                    <p className="text-lg text-slate-300 max-w-2xl">
                        Güncel yargı kararları ve mevzuat değişikliklerine dair derinlemesine analizlerimizi keşfedin.
                    </p>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
                {loading ? (
                    <p className="text-center text-slate-400">Makaleler yükleniyor...</p>
                ) : articles.length === 0 ? (
                    <p className="text-center text-slate-400">Henüz makale bulunmuyor.</p>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2">
                        {articles.map((article) => (
                            <article
                                key={article.id}
                                className="group flex flex-col gap-6 rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-2 hover:border-amber-300/60"
                            >
                                {article.imageUrl && (
                                    <div className="overflow-hidden rounded-xl">
                                        <img
                                            src={article.imageUrl}
                                            alt={article.title}
                                            className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                )}

                                <div className="flex-1 space-y-4">
                                    <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
                                        {new Date(article.createdDate).toLocaleDateString("tr-TR")}
                                    </div>
                                    <h2 className="text-2xl font-semibold text-white group-hover:text-amber-200 transition">
                                        <Link to={`/article/${article.id}`}>{article.title}</Link>
                                    </h2>
                                    <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                                        {article.summary}
                                    </p>
                                </div>

                                <Link
                                    to={`/article/${article.id}`}
                                    className="text-xs uppercase tracking-[0.3em] text-amber-200/80 hover:text-amber-200 transition"
                                >
                                    Devamını Oku →
                                </Link>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Articles;
