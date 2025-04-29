"use client";

import { LanguageProvider } from "@/contexts/language-context";
import { AuthProvider } from "@/contexts/auth-context";
import Header from "@/components/ui/header";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Header />
        {children}
      </AuthProvider>
    </LanguageProvider>
  );
}
