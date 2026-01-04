const About = () => {
    return (
        <div className="bg-white font-sans text-slate-800">

            {/* Üst Başlık */}
            <div className="bg-[#3b4b61] py-12 text-center text-white">
                <h1 className="text-4xl font-serif tracking-widest uppercase">Hakkımızda</h1>
                <p className="mt-2 text-slate-300 font-light tracking-wider">TECRÜBE • GÜVEN • ADALET</p>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Sol Taraf: Görsel */}
                    <div className="relative">
                        <div className="absolute -inset-4 border-2 border-[#3b4b61] opacity-20"></div>
                        <img
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Avukat Ofisi"
                            className="relative shadow-2xl w-full h-[500px] object-cover grayscale-[20%]"
                        />
                    </div>

                    {/* Sağ Taraf: Yazı */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif text-[#3b4b61] font-bold border-b-2 border-slate-200 pb-4">
                            Biz Kimiz?
                        </h2>

                        <p className="text-lg leading-relaxed font-serif text-slate-700 text-justify">
                            Hukuk Büromuz, müvekkillerine en yüksek kalitede hukuki danışmanlık ve avukatlık hizmeti sunmak amacıyla İstanbul'da kurulmuştur.
                            Kuruluşumuzdan bu yana, hukukun üstünlüğü ilkesini benimseyerek, müvekkillerimizin hak ve menfaatlerini en etkin şekilde korumayı ilke edindik.
                        </p>

                        <p className="text-lg leading-relaxed font-serif text-slate-700 text-justify">
                            Ceza Hukuku, Aile Hukuku, Gayrimenkul Hukuku ve Ticaret Hukuku başta olmak üzere geniş bir yelpazede hizmet vermekteyiz.
                            Her dosyayı titizlikle inceliyor, güncel Yargıtay kararları ve mevzuat değişiklikleri ışığında stratejik çözümler üretiyoruz.
                        </p>

                        <div className="bg-slate-50 p-6 border-l-4 border-[#3b4b61] mt-8">
                            <p className="italic text-slate-600 font-serif">
                                "Adalet, mülkün temelidir. Bizim görevimiz ise bu temeli her dava ve danışmanlık sürecinde sağlam tutmaktır."
                            </p>
                            <div className="mt-4 font-bold text-[#3b4b61]">— Eser Hukuk ve Danışmanlık</div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer */}

        </div>
    );
};

export default About;