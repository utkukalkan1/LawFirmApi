import { useEffect, useState } from "react";
import { http } from "../shared/api/http";
import { Link } from "react-router-dom";

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
        <div className="bg-white font-sans text-slate-800">

            {/* Üst Başlık */}
            <div className="bg-[#3b4b61] py-12 text-center text-white">
                <h1 className="text-4xl font-serif tracking-widest uppercase">Hukuki Makaleler</h1>
                <p className="mt-2 text-slate-300 font-light tracking-wider">GÜNCEL YARGI KARARLARI VE HUKUKİ İNCELEMELER</p>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-16">

                {loading ? (
                    <p className="text-center text-slate-500">Makaleler yükleniyor...</p>
                ) : articles.length === 0 ? (
                    <p className="text-center text-slate-500">Henüz makale bulunmuyor.</p>
                ) : (
                    <div className="space-y-12">
                        {articles.map((article) => (
                            <div key={article.id} className="flex flex-col md:flex-row gap-8 border-b border-slate-200 pb-12 last:border-0">
                                {/* Varsa Resim (Mobil uyumlu) */}
                                {article.imageUrl && (
                                    <div className="w-full md:w-64 h-48 flex-shrink-0">
                                        <img
                                            src={article.imageUrl}
                                            alt={article.title}
                                            className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition duration-500"
                                        />
                                    </div>
                                )}

                                {/* İçerik */}
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold font-serif text-[#3b4b61] mb-3 hover:text-blue-800 transition">
                                        <Link to={`/article/${article.id}`}>{article.title}</Link>
                                    </h2>
                                    <div className="text-xs text-slate-400 mb-4 uppercase tracking-wider font-bold">
                                        {new Date(article.createdDate).toLocaleDateString('tr-TR')}
                                    </div>
                                    <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                                        {article.summary}
                                    </p>
                                    <Link
                                        to={`/article/${article.id}`}
                                        className="inline-block border-b border-[#3b4b61] text-[#3b4b61] font-bold text-sm hover:text-blue-800 hover:border-blue-800 transition pb-1"
                                    >
                                        DEVAMINI OKU &rarr;
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>

        </div>
    );
};

export default Articles;