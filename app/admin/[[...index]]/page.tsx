"use client";

import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    // Redirect to the Tina admin interface
    window.location.href = "/admin/index.html";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F2EF]">
      <div className="text-[#336021] text-xl font-serif">
        Redirecting to admin...
      </div>
    </div>
  );
}