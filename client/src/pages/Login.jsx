import { useState } from "react";
import { http } from "../shared/api/http";
import { setToken } from "../shared/auth/tokenStorage";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(""); // Önceki hataları temizle

        try {
            // Backend'e istek atıyoruz
            // DİKKAT: Buradaki 7023 senin port numaran olmalı. Swagger adresinden kontrol et.
            const response = await http.post("/api/Auth/login", {
                username: username,
                password: password
            });

            // Eğer başarılıysa:
            const token = response.data;
            console.log("Token alındı:", token);

            // Token'ı tarayıcı hafızasına (LocalStorage) kaydediyoruz
            setToken(token);

            alert("Giriş Başarılı! Yönlendiriliyorsunuz...");
            navigate('/dashboard'); // Artık panele gidiyoruz

        } catch (err) {
            console.error(err);
            setError("Giriş başarısız! Kullanıcı adı veya şifre yanlış.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">

                <div className="text-center">
                    <h1 className="text-3xl font-bold text-slate-800">Yönetim Paneli</h1>
                    <p className="text-slate-500 mt-2">Hukuk Bürosu Sistemi</p>
                </div>

                {/* Hata Mesajı Kutusu */}
                {error && (
                    <div className="p-3 text-sm text-red-700 bg-red-100 rounded-lg">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700">Kullanıcı Adı</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Admin"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700">Şifre</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 font-bold text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition duration-200"
                    >
                        Giriş Yap
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;