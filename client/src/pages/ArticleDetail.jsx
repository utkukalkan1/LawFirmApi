import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { http } from "../shared/api/http";

const ArticleDetail = () => {
    const { id } = useParams(); // URL'den ID'yi kap (örn: /article/5)
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                // Port numarana dikkat: 7023
                const response = await http.get(`/api/Articles/${id}`);
                setArticle(response.data);
            } catch (err) {
                console.error("Makale yüklenemedi:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchArticle();
    }, [id]);

    if (loading) return <div className="text-center mt-20">Yükleniyor...</div>;
    if (!article) return <div className="text-center mt-20 text-red-500">Makale bulunamadı.</div>;

    return (
        <div className="bg-slate-50 font-sans">

            {/* Makale Başlığı ve Kapak */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-4xl mx-auto px-6 py-12 text-center">
                    <span className="text-blue-600 font-bold text-sm tracking-wide uppercase">Hukuki Makale</span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6 leading-tight">
                        {article.title}
                    </h1>
                    <div className="text-slate-500 text-sm">
                        {new Date(article.createdDate).toLocaleDateString('tr-TR')} • Yazan: Av. Adı Soyadı
                    </div>
                </div>
            </div>

            {/* Makale İçeriği */}
            <article className="max-w-3xl mx-auto px-6 py-12">
                {article.imageUrl && (
                    <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-auto rounded-xl shadow-lg mb-10"
                    />
                )}

                {/* HTML İçeriği Basma Alanı */}
                <div
                    className="prose prose-lg prose-slate max-w-none text-slate-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                ></div>

                {/* Paylaş / İletişim Alanı */}
                <div className="mt-12 p-8 bg-blue-50 rounded-xl border border-blue-100 text-center">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Hukuki Desteğe mi İhtiyacınız Var?</h3>
                    <p className="text-blue-700 mb-6">Bu konu hakkında daha detaylı bilgi almak için bizimle iletişime geçebilirsiniz.</p>
                    <a href="/contact" className="inline-block bg-blue-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition">
                        İletişime Geç
                    </a>
                </div>
            </article>

        </div>
    );
};

export default ArticleDetail;