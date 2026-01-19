import { AuthPage } from "@/pages/auth";
import { ChatPage } from "@/pages/chat";
import { PlansPage } from "@/pages/plans";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/plans" element={<PlansPage />} />

        <Route path="/login" element={<AuthPage />} />

        <Route path="*" element={<Navigate to="/chat" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
