const About = () => {
    return (
        <div className="bg-slate-950 text-white">
            <section className="relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
                <div className="max-w-6xl mx-auto px-6 py-20 animate-fade-in-up">
                    <p className="text-xs uppercase tracking-[0.5em] text-amber-200/70 mb-4">Hakkımızda</p>
                    <h1 className="text-4xl md:text-5xl font-semibold mb-4">Tecrübe ve güven üzerine kurulu bir ekip.</h1>
                    <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                        Müvekkillerimizin ihtiyaçlarına göre özelleştirilmiş, hızlı ve şeffaf bir danışmanlık süreci sunarız.
                    </p>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="absolute -inset-4 border border-amber-300/20 rounded-3xl"></div>
                        <img
                            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
                            alt="Ekip çalışması"
                            className="relative rounded-3xl shadow-2xl w-full h-[480px] object-cover"
                        />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold">Biz kimiz?</h2>
                        <p className="text-slate-300 leading-relaxed">
                            Eser Hukuk ve Danışmanlık, İstanbul’da kurulan ve farklı hukuk alanlarında uzmanlaşmış
                            bir ekipten oluşur. Her dosyada hızlı analiz, doğru strateji ve güçlü temsil anlayışıyla
                            hareket ederiz.
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                            Ceza, aile, gayrimenkul ve ticaret hukuku başta olmak üzere müvekkillerimizin haklarını
                            korumaya odaklanırız. Süreç boyunca açık iletişim ve düzenli bilgilendirme sağlarız.
                        </p>
                        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-sm text-slate-300">
                            “Adaletin tesisi için her dosyada titizlikle çalışır, müvekkillerimizin güvenini önceleyen
                            bir hizmet sunarız.”
                            <div className="mt-4 text-xs uppercase tracking-[0.3em] text-amber-200/70">
                                — Eser Hukuk ve Danışmanlık
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-900 border-y border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Stratejik Yaklaşım",
                                text: "Her dosya için planlı, ölçülebilir ve öngörülebilir bir yol haritası sunarız."
                            },
                            {
                                title: "Ekip Gücü",
                                text: "Alanında deneyimli hukukçulardan oluşan ekibimizle birlikte hareket ederiz."
                            },
                            {
                                title: "Müvekkil Deneyimi",
                                text: "Süreç boyunca erişilebilir olur, süreci şeffaf ve anlaşılır kurgularız."
                            }
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 transition duration-300 hover:-translate-y-2 hover:border-amber-300/60"
                            >
                                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-300 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
