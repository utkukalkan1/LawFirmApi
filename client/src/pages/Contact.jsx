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
            await http.post("/api/Contacts", formData);
            alert("Mesajınız bize ulaştı! En kısa sürede dönüş yapacağız.");
            setFormData({ fullName: "", email: "", phoneNumber: "", subject: "", message: "" });
        } catch (err) {
            console.error(err);
            alert("Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyiniz.");
        }
    };

    return (
        <div className="bg-slate-950 text-white">
            <section className="border-b border-white/10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
                    <p className="text-xs uppercase tracking-[0.32em] sm:tracking-[0.5em] text-amber-200/70 mb-4">İletişim</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">Dosyanız için hızlı bir değerlendirme yapalım.</h1>
                    <p className="text-lg text-slate-300 max-w-2xl">
                        Sorunuzu bize iletin, 24 saat içinde geri dönüş sağlayalım. Ofisimize gelmek isterseniz
                        tüm detaylar aşağıda.
                    </p>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
                <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10">
                    <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
                        <h2 className="text-2xl font-semibold">Ofis Bilgileri</h2>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            Bizi arayabilir, ofisimize uğrayabilir ya da form üzerinden mesaj gönderebilirsiniz.
                            İlk görüşmede süreç planlaması yapıyor ve aksiyon adımlarını belirliyoruz.
                        </p>

                        <div className="space-y-4 text-sm text-slate-300">
                            <div className="flex items-start gap-4">
                                <span className="text-amber-200">📍</span>
                                <div>
                                    <p className="text-white font-medium">Adres</p>
                                    <p>Kağıthane Mah. Büyükdere Cad. No:123, İstanbul</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-amber-200">📞</span>
                                <div>
                                    <p className="text-white font-medium">Telefon</p>
                                    <p>+90 (552) 821 17 17</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-amber-200">✉️</span>
                                <div>
                                    <p className="text-white font-medium">E-Posta</p>
                                    <p>info@eserhukuk.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-amber-300/30 bg-slate-950/70 p-6 text-xs uppercase tracking-[0.3em] text-amber-200/80">
                            Hafta içi 09:00 - 19:00 arası hizmet veriyoruz.
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5 rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8"
                    >
                        <div>
                            <label className="block text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">
                                Adınız Soyadınız
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-300/60 focus:outline-none"
                                placeholder="Ad Soyad"
                            />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">
                                E-Posta Adresiniz
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-300/60 focus:outline-none"
                                placeholder="ornek@mail.com"
                            />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">
                                Telefon (Opsiyonel)
                            </label>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-300/60 focus:outline-none"
                                placeholder="+90 5XX XXX XX XX"
                            />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">Konu</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-300/60 focus:outline-none"
                                placeholder="Dava türü veya talebiniz"
                            />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">Mesajınız</label>
                            <textarea
                                name="message"
                                required
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-300/60 focus:outline-none"
                                placeholder="Kısa bir özet paylaşın."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-300/30"
                        >
                            Mesaj Gönder
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
