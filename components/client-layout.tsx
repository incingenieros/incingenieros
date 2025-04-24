"use client";

import { LanguageProvider } from "@/contexts/language-context";
import Header from "@/components/ui/header";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      {children}
    </LanguageProvider>
  );
}
