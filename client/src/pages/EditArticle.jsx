import { useState, useEffect } from "react";
import { http } from "../shared/api/http";
import { getToken } from "../shared/auth/tokenStorage";
import { useNavigate, useParams } from "react-router-dom";

const EditArticle = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // URL'deki ID'yi al (örn: /edit-article/5)

    const [formData, setFormData] = useState({
        id: 0,
        title: "",
        summary: "",
        content: "",
        imageUrl: "",
        authorId: 1
    });
    const [loading, setLoading] = useState(true);

    // 1. Sayfa açılınca mevcut verileri çek
    useEffect(() => {
        const fetchArticle = async () => {
            const token = getToken();
            if (!token) {
                navigate("/login");
                return;
            }

            try {
                // Backend'den veriyi al
                const response = await http.get(`/api/Articles/${id}`);
                setFormData(response.data); // Formu doldur
                setLoading(false);
            } catch (err) {
                console.error(err);
                alert("Makale bilgileri yüklenemedi.");
                navigate("/dashboard");
            }
        };
        fetchArticle();
    }, [id, navigate]);

    // 2. Form değişince state'i güncelle
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 3. Kaydet butonuna basınca güncelle (PUT İsteği)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // PUT isteği ile güncelleme yapıyoruz
            await http.put(`/api/Articles/${id}`, formData);

            alert("Makale başarıyla güncellendi!");
            navigate("/dashboard");
        } catch (err) {
            console.error(err);
            alert("Güncelleme sırasında bir hata oluştu.");
        }
    };

    if (loading) return <div className="text-center mt-10">Veriler Yükleniyor...</div>;

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
            <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">

                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-slate-800">Makale Düzenle</h2>
                    <button onClick={() => navigate("/dashboard")} className="text-slate-500 hover:text-slate-700">
                        ✕ İptal
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Makale Başlığı</label>
                        <input
                            type="text" name="title" required
                            value={formData.title} // State'ten gelen değer
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Kısa Özet</label>
                        <textarea
                            name="summary" required rows="2"
                            value={formData.summary}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">İçerik</label>
                        <textarea
                            name="content" required rows="8"
                            value={formData.content}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Kapak Fotoğrafı URL</label>
                        <input
                            type="text" name="imageUrl"
                            value={formData.imageUrl || ""}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition"
                    >
                        Değişiklikleri Kaydet
                    </button>

                </form>
            </div>
        </div>
    );
};

export default EditArticle;