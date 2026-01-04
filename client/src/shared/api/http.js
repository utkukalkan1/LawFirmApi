import axios from "axios";
import { getToken, clearToken } from "../auth/tokenStorage";

/**
 * Tek noktadan API erişimi.
 * Base URL'yi .env üzerinden yönet: VITE_API_BASE_URL
 */
export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://localhost:7023",
  headers: { "Content-Type": "application/json" },
});

http.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// İsteğe bağlı: 401 geldiğinde token temizle
http.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err?.response?.status === 401) {
      clearToken();
    }
    return Promise.reject(err);
  }
);
