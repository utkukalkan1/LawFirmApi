import { useState } from "react";
import { http } from "../shared/api/http";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Backend Portuna Dikkat: 7023
            await http.post("/api/Contacts", formData);
            alert("Mesajınız bize ulaştı! En kısa sürede dönüş yapacağız.");
            setFormData({ fullName: "", email: "", phoneNumber: "", subject: "", message: "" }); // Formu temizle
        } catch (err) {
            console.error(err);
            alert("Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyiniz.");
        }
    };

    return (
        <div className="bg-slate-50">

            <div className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center">İletişime Geçin</h1>

                <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-xl shadow-lg">
                    {/* Sol Taraf: İletişim Bilgileri */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-blue-900">Ofis Bilgileri</h3>
                        <p className="text-slate-600">
                            Hukuki sorunlarınız için ofisimize gelebilir veya aşağıdaki form üzerinden bize yazabilirsiniz.
                        </p>

                        <div>
                            <strong className="block text-slate-800">Adres:</strong>
                            <span className="text-slate-600">Levent Mah. Büyükdere Cad. No:123, Beşiktaş/İstanbul</span>
                        </div>
                        <div>
                            <strong className="block text-slate-800">Telefon:</strong>
                            <span className="text-slate-600">0(212) 123 45 67</span>
                        </div>
                        <div>
                            <strong className="block text-slate-800">E-Posta:</strong>
                            <span className="text-slate-600">info@avukatsitesi.com</span>
                        </div>
                    </div>

                    {/* Sağ Taraf: Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700">Adınız Soyadınız</label>
                            <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange}
                                className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700">E-Posta Adresiniz</label>
                            <input type="email" name="email" required value={formData.email} onChange={handleChange}
                                className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700">Telefon (Opsiyonel)</label>
                            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
                                className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700">Konu</label>
                            <input type="text" name="subject" value={formData.subject} onChange={handleChange}
                                className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700">Mesajınız</label>
                            <textarea name="message" required rows="4" value={formData.message} onChange={handleChange}
                                className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-blue-900 text-white font-bold py-3 rounded hover:bg-blue-800 transition">
                            GÖNDER
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;