import { useState, useEffect } from "react";
import { http } from "../shared/api/http";
import { getToken } from "../shared/auth/tokenStorage";
import { useNavigate } from "react-router-dom";

const AddArticle = () => {
    const navigate = useNavigate();

    // Form verileri için State
    const [formData, setFormData] = useState({
        title: "",
        summary: "",
        content: "",
        imageUrl: "",
        authorId: 1 // Şimdilik varsayılan admin ID'si
    });

    // Güvenlik: Token yoksa Login'e at
    useEffect(() => {
        if (!getToken()) {
            navigate("/login");
        }
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Backend'e gönder
            await http.post("/api/Articles", formData);

            alert("Makale başarıyla eklendi!");
            navigate("/dashboard"); // İşlem bitince panele dön
        } catch (err) {
            console.error(err);
            alert("Makale eklenirken bir hata oluştu.");
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
            <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">

                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-slate-800">Yeni Makale Ekle</h2>
                    <button onClick={() => navigate("/dashboard")} className="text-slate-500 hover:text-slate-700">
                        ✕ İptal
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Başlık */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Makale Başlığı</label>
                        <input
                            type="text" name="title" required
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Örn: Boşanma Davası Süreci"
                            onChange={handleChange}
                        />
                    </div>

                    {/* Özet */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Kısa Özet (Kartlarda görünür)</label>
                        <textarea
                            name="summary" required rows="2"
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Makalenin içeriğini 1-2 cümle ile özetleyin..."
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    {/* İçerik */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">İçerik (HTML formatında yazılabilir)</label>
                        <textarea
                            name="content" required rows="8"
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Makale içeriğini buraya yazın..."
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    {/* Resim URL */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Kapak Fotoğrafı URL (Opsiyonel)</label>
                        <input
                            type="text" name="imageUrl"
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="https://..."
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition"
                    >
                        Makaleyi Yayınla
                    </button>

                </form>
            </div>
        </div>
    );
};

export default AddArticle;