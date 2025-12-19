"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as gtag from "@/lib/gtag";

interface BookNowButtonProps {
  slug: string;
  language: "en" | "id";
  className?: string;
}

export default function BookNowButton({
  slug,
  language,
  className,
}: BookNowButtonProps) {
  return (
    <Button
      asChild
      className={className}
      onClick={() => {
        gtag.event({
          action: "book_now_click",
          category: "engagement",
          label: `destination_${slug}`,
        });
      }}
    >
      <Link href="mailto:booking@manjotravel.com">
        {language === "en" ? "Book Now" : "Pesan Sekarang"}
      </Link>
    </Button>
  );
}
