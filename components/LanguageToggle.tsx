"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function LanguageToggle() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentLang = searchParams.get("lang") || "en";

  const setLanguage = (lang: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("lang", lang);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-1 border-2 border-[#336021] rounded-full p-1">
      <button
        onClick={() => setLanguage("id")}
        className={`px-4 py-1.5 rounded-full text-sm font-serif font-bold transition-all ${
          currentLang === "id"
            ? "bg-[#336021] text-white"
            : "text-[#336021] hover:bg-[#D8D1BD]/30"
        }`}
      >
        IND
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-4 py-1.5 rounded-full text-sm font-serif font-bold transition-all ${
          currentLang === "en"
            ? "bg-[#336021] text-white"
            : "text-[#336021] hover:bg-[#D8D1BD]/30"
        }`}
      >
        ENG
      </button>
    </div>
  );
}
