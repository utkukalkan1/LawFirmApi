import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { http } from "../shared/api/http";
import { clearToken, getToken } from "../shared/auth/tokenStorage";

const Dashboard = () => {
    const navigate = useNavigate();

    // State'lerimizi tanımlıyoruz
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // ----------------------------------------------------
    // GÜVENLİK VE VERİ ÇEKME İŞLEMLERİ
    // ----------------------------------------------------
    useEffect(() => {
        const token = getToken();
        if (!token) {
            navigate("/login");
            return;
        }

        // Makaleleri çekme fonksiyonu
        const fetchArticles = async () => {
            try {
                const response = await http.get("/api/Articles");
                setArticles(response.data);
            } catch (err) {
                console.error("Makale çekerken hata:", err);
                setError("Veriler yüklenirken bir sorun oluştu.");
                // Yetki hatasıysa çıkış yap
                if (err.response && err.response.status === 401) {
                    handleLogout();
                }
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, [navigate]);

    const handleLogout = () => {
        clearToken();
        navigate("/login");
    };

    // Makale Silme Fonksiyonu
    const handleDelete = async (id) => {
        if (window.confirm("Bu makaleyi silmek istediğinize emin misiniz?")) {
            try {
                await http.delete(`/api/Articles/${id}`);

                // Veritabanından silindi, şimdi ekrandaki listeden de silelim (Sayfa yenilemeden)
                setArticles(articles.filter(article => article.id !== id));

                // İsteğe bağlı: Ufak bir bildirim
                // alert("Makale silindi."); 
            } catch (err) {
                console.error("Silme hatası:", err);
                alert("Silme işlemi başarısız oldu.");
            }
        }
    };

    // Tarih formatlama fonksiyonu
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('tr-TR', options);
    };
    // ----------------------------------------------------

    // Yükleme ekranı
    if (loading) {
        return <div className="flex items-center justify-center h-screen text-slate-700">Yükleniyor...</div>;
    }

    // Hata ekranı
    if (error) {
        return <div className="flex items-center justify-center h-screen text-red-700">{error}</div>;
    }

    // Dashboard arayüzü
    return (
        <div className="flex h-screen bg-slate-100">
            {/* SOL MENÜ (SIDEBAR) - Önceki kod aynı kalıyor */}
            <div className="w-64 bg-slate-900 text-white flex flex-col">
                <div className="p-6 text-2xl font-bold text-center border-b border-slate-700">
                    Hukuk Paneli
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    <button className="w-full text-left px-4 py-3 bg-slate-800 rounded hover:bg-slate-700 transition">
                        📄 Makaleler ({articles.length})
                    </button>
                    <button className="w-full text-left px-4 py-3 rounded hover:bg-slate-800 transition">
                        📩 Mesajlar
                    </button>
                    <button className="w-full text-left px-4 py-3 rounded hover:bg-slate-800 transition">
                        ⚙️ Ayarlar
                    </button>
                </nav>

                <div className="p-4 border-t border-slate-700">
                    <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 text-sm font-bold text-red-400 border border-red-400 rounded hover:bg-red-400 hover:text-white transition"
                    >
                        Çıkış Yap
                    </button>
                </div>
            </div>

            {/* SAĞ TARAF (İÇERİK ALANI) */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
                    <h2 className="text-xl font-semibold text-slate-800">Makale Yönetimi</h2>
                    <div className="text-sm text-slate-500">Hoşgeldin, Admin</div>
                </header>

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100 p-6">

                    <div className="p-6 bg-white rounded-lg shadow">
                        {/* Başlık ve Butonu Yan Yana Getirmek İçin Flex Yapısı */}
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold">Mevcut Makaleler ({articles.length} Adet)</h3>
                            <button
                                onClick={() => navigate("/add-article")}
                                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition"
                            >
                                + Yeni Makale Ekle
                            </button>
                        </div>

                        {articles.length === 0 ? (
                            <p className="text-slate-500">Henüz eklenmiş makale bulunmamaktadır.</p>
                        ) : (
                            <table className="min-w-full divide-y divide-slate-200">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Başlık</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Özet</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Tarih</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">İşlem</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-slate-200">
                                    {articles.map((article) => (
                                        <tr key={article.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{article.title}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{article.summary.substring(0, 50)}...</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{formatDate(article.createdDate)}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                                <button
                                                    onClick={() => navigate(`/edit-article/${article.id}`)}
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                >
                                                    Düzenle
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(article.id)}
                                                    className="text-red-600 hover:text-red-900 ml-4"
                                                >
                                                    Sil
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}

                    </div>

                </main>
            </div>
        </div>
    );
};

export default Dashboard;