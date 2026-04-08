const About = () => {
    return (
        <div className="bg-slate-950 text-white">
            <section className="relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 animate-fade-in-up">
                    <p className="text-xs uppercase tracking-[0.32em] sm:tracking-[0.5em] text-amber-200/70 mb-4">Hakkımızda</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">İstanbul’da ve Türkiye’nin her yerinde; tecrübe, güven ve iletişime odaklı avukatlar.</h1>
                    <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                        Uzmanlaştığımız alanlarda, müvekkillerimizin ihtiyaçları doğrultusunda, özel bir avukatlık hizmeti sunuyoruz.
                    </p>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="absolute -inset-4 border border-amber-300/20 rounded-3xl"></div>
                        <img
                            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
                            alt="Ekip çalışması"
                            className="relative rounded-3xl shadow-2xl w-full h-[320px] sm:h-[420px] md:h-[480px] object-cover"
                        />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-semibold">ESER HUKUK VE DANIŞMANLIK - İSTANBUL AVUKAT - İSTANBUL HUKUK VE DANIŞMANLIK</h2>
                        <p className="text-slate-300 leading-relaxed">
                            Eser Hukuk ve Danışmanlık, İstanbul merkezli bir hukuk bürosu olarak bireysel ve kurumsal müvekkillerine farklı hukuk alanlarında profesyonel danışmanlık ve dava takibi hizmeti sunmaktadır. Büromuz özellikle malpraktis davaları ve sağlık hukuku uyuşmazlıkları, iş hukuku davaları, ceza hukuku davaları ile marka ve patent hukuku alanlarında uzmanlaşmış olup müvekkillerinin haklarını etkili ve çözüm odaklı bir yaklaşımla korumayı hedeflemektedir. 
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                            İstanbul avukatlık hizmetleri kapsamında faaliyet gösteren Eser Hukuk ve Danışmanlık, tıbbi malpraktis davaları, işçi alacakları ve iş hukuku uyuşmazlıkları, ceza davaları ile marka ve patent hukukuna ilişkin ihtilaflarda kapsamlı hukuki destek sağlamaktadır. Deneyimli avukat kadromuz, hukuki süreçlerin her aşamasında müvekkillerine stratejik danışmanlık sunarak hak kayıplarının önlenmesini amaçlamakta ve İstanbul başta olmak üzere Türkiye genelinde dava ve danışmanlık hizmeti vermektedir.
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
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
                    <div className="grid md:grid-cols-3 gap-5 sm:gap-8">
                        {[
                            {
                                title: "Stratejik Avukatlık Hizmeti",
                                text: "İstanbul avukat, süreçlerinizde en doğru stratejik yolları seçmeye çalışır, sürecinizde yardımcı olur."
                            },
                            {
                                title: "Deneyimli Avukat",
                                text: "İstanbul avukat, malpraktis davaları, işçilik alacakları, ceza davaları, marka patent davaları başta olmak üzere pek çok alanda, alanında uzmanlaşmış avukatlarıyla hizmet eder."
                            },
                            {
                                title: "İletişime Önem Veren Avukatlık",
                                text: "İstanbul avukat, dosyalarında müvekkilleriyle iletişim kurar, durumu anlatır ve beklentileri normale çeker."
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
