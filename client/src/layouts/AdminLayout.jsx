import { Outlet } from "react-router-dom";

/**
 * Şimdilik sadece Outlet.
 * Sonraki adımda Dashboard içindeki sidebar/header buraya taşınacak.
 */
export default function AdminLayout() {
  return <Outlet />;
}
