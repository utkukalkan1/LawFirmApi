import { useEffect, useState } from "react";
import { http } from "../shared/api/http";
import { Link } from "react-router-dom";

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
        <div className="bg-white text-law-text font-serif">

            {/* 1. BÖLÜM: AÇIKLAMA METNİ (Text Şeklinde) */}
            <div className="max-w-5xl mx-auto px-6 py-16">
                {/* Başlık */}
                <div className="border-b-2 border-gray-200 pb-4 mb-8">
                    <h1 className="text-3xl font-bold text-law-blue">Eser Hukuk ve Danışmanlık</h1>
                </div>

                {/* Metin İçeriği (Justified - İki yana yaslı ve Ciddi) */}
                <div className="text-lg leading-loose text-gray-700 text-justify space-y-6">
                    <p>
                        Hukuk büromuz, İstanbul merkezli olup, kurulduğu günden bu yana müvekkillerine şeffaf,
                        sonuç odaklı ve güvenilir bir hukuki danışmanlık hizmeti sunmayı ilke edinmiştir.
                        Hukukun üstünlüğü prensibiyle, her dosyayı titizlikle inceliyor ve en güncel yargı
                        kararları ışığında stratejiler geliştiriyoruz.
                    </p>
                    <p>
                        Ceza Hukuku, Aile Hukuku, Gayrimenkul Hukuku ve Ticaret Hukuku başta olmak üzere;
                        hem bireysel hem de kurumsal müvekkillerimizin hukuki sorunlarına etkin çözümler üretmekteyiz.
                        Amacımız, karmaşık hukuki süreçleri müvekkillerimiz adına sadeleştirerek hak kaybı yaşanmasının önüne geçmektir.
                    </p>
                </div>
            </div>

            {/* 2. BÖLÜM: MAKALELER SIRALANIYOR */}
            <div className="bg-[#fcfcfc] border-t border-gray-200 py-16">
                <div className="max-w-5xl mx-auto px-6">

                    {/* Bölüm Başlığı */}
                    <h2 className="text-2xl font-bold text-law-blue mb-10 flex items-center">
                        <span className="text-3xl mr-3">⚖️</span> Güncel Hukuki Makaleler
                    </h2>

                    {/* Makale Listesi */}
                    <div className="space-y-10">
                        {latestArticles.length === 0 ? (
                            <p className="text-gray-500">Makaleler yükleniyor...</p>
                        ) : (
                            latestArticles.map((article) => (
                                <div key={article.id} className="group">
                                    {/* Makale Başlığı */}
                                    <h3 className="text-xl font-bold text-law-blue mb-2 group-hover:underline">
                                        <Link to={`/article/${article.id}`}>
                                            {article.title}
                                        </Link>
                                    </h3>

                                    {/* Tarih */}
                                    <div className="text-xs text-gray-400 mb-3 font-sans font-bold uppercase tracking-wider">
                                        {new Date(article.createdDate).toLocaleDateString('tr-TR')}
                                    </div>

                                    {/* Özet */}
                                    <p className="text-gray-600 leading-relaxed text-justify mb-3">
                                        {article.summary}
                                    </p>

                                    {/* Devamını Oku */}
                                    <Link to={`/article/${article.id}`} className="text-sm font-sans font-bold text-[#3b4b61] hover:text-black border-b border-[#3b4b61] pb-0.5">
                                        DEVAMINI OKU &rarr;
                                    </Link>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Tümünü Gör Butonu */}
                    <div className="mt-12 text-center">
                        <Link to="/articles" className="inline-block border border-law-blue text-law-blue px-6 py-3 rounded hover:bg-law-blue hover:text-white transition font-sans font-bold text-sm uppercase">
                            Tüm Makaleleri İncele
                        </Link>
                    </div>

                </div>
            </div>

            {/* FOOTER */}

        </div>
    );
};

export default Home;