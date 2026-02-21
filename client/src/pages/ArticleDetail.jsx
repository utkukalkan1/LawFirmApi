import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { http } from "../shared/api/http";

const BULLET_SEPARATORS = /\s*[•◆♦🔹▪️◾◽✔✅📌🎯🔍]\s*/g;

const hasHtmlTags = (text) => /<[^>]+>/.test(text);

const getListItemsFromContent = (content) => {
    if (!content || hasHtmlTags(content)) {
        return [];
    }

    const normalized = content
        .replace(/\r\n/g, "\n")
        .replace(/\n{2,}/g, "\n")
        .trim();

    const lineBasedItems = normalized
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean);

    if (lineBasedItems.length > 1) {
        return lineBasedItems;
    }

    const symbolBasedItems = normalized
        .split(BULLET_SEPARATORS)
        .map((item) => item.trim())
        .filter(Boolean);

    return symbolBasedItems.length > 1 ? symbolBasedItems : [];
};

const ArticleDetail = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
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

    const listItems = useMemo(() => getListItemsFromContent(article?.content), [article?.content]);

    if (loading) return <div className="text-center mt-20 text-slate-300">Yükleniyor...</div>;
    if (!article) return <div className="text-center mt-20 text-red-500">Makale bulunamadı.</div>;

    return (
        <div className="bg-slate-950 text-white">
            <div className="border-b border-white/10 bg-slate-900/60">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
                    <span className="text-amber-200/80 font-semibold text-xs uppercase tracking-[0.3em]">Hukuki Makale</span>
                    <h1 className="text-3xl md:text-5xl font-semibold text-white mt-4 mb-6 leading-tight">
                        {article.title}
                    </h1>
                    <div className="text-slate-400 text-sm">
                        {new Date(article.createdDate).toLocaleDateString("tr-TR")} • Yazan: Av. Adı Soyadı
                    </div>
                </div>
            </div>

            <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
                {article.imageUrl && (
                    <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-auto rounded-xl shadow-lg mb-10"
                    />
                )}

                {listItems.length > 0 ? (
                    <ul className="space-y-4 rounded-2xl border border-white/10 bg-slate-900/60 p-5 sm:p-7">
                        {listItems.map((item, index) => (
                            <li key={`${index}-${item.slice(0, 24)}`} className="flex items-start gap-3 text-slate-200 leading-relaxed">
                                <span className="mt-2 h-2 w-2 rounded-full bg-amber-300 shrink-0"></span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                ) : hasHtmlTags(article.content) ? (
                    <div
                        className="prose prose-invert prose-lg prose-headings:text-white prose-p:text-slate-200 prose-li:text-slate-200 max-w-none"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    ></div>
                ) : (
                    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 sm:p-7 text-slate-200 leading-relaxed whitespace-pre-line">
                        {article.content}
                    </div>
                )}

                <div className="mt-12 p-8 bg-slate-900 rounded-xl border border-white/10 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Hukuki Desteğe mi İhtiyacınız Var?</h3>
                    <p className="text-slate-300 mb-6">Bu konu hakkında daha detaylı bilgi almak için bizimle iletişime geçebilirsiniz.</p>
                    <a href="/contact" className="inline-block bg-amber-300 text-slate-900 px-8 py-3 rounded-full font-semibold hover:brightness-95 transition">
                        İletişime Geç
                    </a>
                </div>
            </article>
        </div>
    );
};

export default ArticleDetail;
