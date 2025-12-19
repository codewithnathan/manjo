"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import * as gtag from "@/lib/gtag";

interface Destination {
  name: string;
  location: string;
  price: number;
  image: string; // Map to 'path' if needed
  slug: string;
}

interface TranslationData {
  home: string;
  ourService: string;
  aboutUs: string;
  tourpackages: string;
  gallery: string;
  contactus: string;
  blog: string;
  bookNow: string;
  explore: string;
  world: string;
  travelDescription: string;
  heroTagline: string;
  heroDescription: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutText: string;
  ourCommitment: string;
  personalizedService: string;
  seamlessLogistics: string;
  reliableSupport: string;
  carefullyPlanned: string;
  warmCustomerCare: string;
  closingMessage: string;
  travelPlaces: string;
  featuresTitle: string;
  featuresDescription: string;
  ourStory: string;
  ourStoryDescription: string;
  discoverTheWorld: string;
  viewDetails: string;
  person: string;
  services: string;
  airlineTickets: string;
  airlineDescription: string;
  visaServices: string;
  visaDescription: string;
  pilgrimageTours: string;
  pilgrimageDescription: string;
  eventLogistics: string;
  eventDescription: string;
  leisureTours: string;
  leisureDescription: string;
  getStarted: string;
  bookNowCta: string;
  destinations: Destination[];
  circularText: string;
  contactEmail: string;
  contactPhone: string;
  domainName: string;
}

interface LandingPageClientProps {
  initialTranslations: {
    ENG: TranslationData;
    IND: TranslationData;
  };
}

export default function LandingPageClient({
  initialTranslations,
}: LandingPageClientProps) {
  const [language, setLanguage] = useState<"ENG" | "IND">("ENG");
  const t = initialTranslations[language];

  return (
    <div className="min-h-screen bg-[#F4F2EF]">
      {/* Header */}
      <header className="px-6 py-4 lg:px-16 flex items-center justify-between border-b border-[#D8D1BD] fixed top-0 left-0 w-full bg-[#F4F2EF] z-20">
        <div className="flex items-center">
          <Image
            src="/manjo-logo.png"
            alt="Manjo Travel and Tours"
            width={200}
            height={70}
            className="h-18 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[#336021] font-sans">
          <a href="#" className="hover:text-[#E68C3A] transition-colors">
            {t.home}
          </a>
          <a href="#about" className="hover:text-[#E68C3A] transition-colors">
            {t.aboutUs}
          </a>
          <a
            href="#services"
            className="hover:text-[#E68C3A] transition-colors"
          >
            {t.ourService}
          </a>
          <a href="#gallery" className="hover:text-[#E68C3A] transition-colors">
            {t.tourpackages}
          </a>
          <a href="#gallery" className="hover:text-[#E68C3A] transition-colors">
            {t.gallery}
          </a>
          <a href="#contact" className="hover:text-[#E68C3A] transition-colors">
            {t.contactus}
          </a>
        </nav>

        <div className="flex items-center gap-4 scale-80">
          <div className="flex items-center gap-1 border-2 border-[#336021] rounded-full p-1">
            <button
              onClick={() => setLanguage("IND")}
              className={`px-4 py-1.5 rounded-full text-sm font-serif font-bold transition-all ${
                language === "IND"
                  ? "bg-[#336021] text-white"
                  : "text-[#336021] hover:bg-[#D8D1BD]/30"
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLanguage("ENG")}
              className={`px-4 py-1.5 rounded-full text-sm font-serif font-bold transition-all ${
                language === "ENG"
                  ? "bg-[#336021] text-white"
                  : "text-[#336021] hover:bg-[#D8D1BD]/30"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-36 lg:px-16 lg:py-48 max-w-6xl mx-auto lg:h-screen">
        <div className="flex flex-col lg:flex-row justify-between gap-16">
          <div className="flex-1 space-y-4">
            <div className="relative">
              <h1 className="text-4xl lg:text-5xl font-serif text-[#336021] leading-tight">
                {t.explore},
                <br />
                {t.world}.
              </h1>
            </div>

            <p className="text-[#336021] text-lg max-w-md leading-relaxed font-sans">
              {t.travelDescription}
            </p>
          </div>

          <div className="h-full max-w-lg w-full rounded-lg overflow-hidden">
            <video src="/nusa.mp4" autoPlay muted playsInline loop></video>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-between gap-8 lg:gap-12">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg -mr-4 z-10">
                <Image
                  src="/tropical-island-aerial.png"
                  alt="Travel destination"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-20 h-20 rounded-2xl overflow-hidden  shadow-lg">
                <Image
                  src="/majestic-mountain-vista.png"
                  alt="Travel destination"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-[#336021]">
                10,000+
              </div>
              <div className="text-[#336021] font-sans">{t.travelPlaces}</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex">
              <div className="w-16 h-16 rounded-full overflow-hidden  shadow-lg -mr-3 z-10">
                <Image
                  src="/travel-group-photo.jpg"
                  alt="Travelers"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/happy-tourist.jpg"
                  alt="Travelers"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="text-xl font-serif font-bold text-[#336021]">
                {t.ourStory}
              </div>
              <div className="text-[#336021] font-sans text-sm max-w-xs">
                {t.ourStoryDescription}
              </div>
            </div>
            <div className="size-16 rounded-full bg-[#E68C3A] flex items-center justify-center cursor-pointer hover:bg-[#d67d2f] transition-all hover:scale-110 shadow-lg">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-serif font-bold text-center text-[#336021] mb-8">
            {t.aboutTitle}
          </h2>
          <p className="text-lg text-[#336021] font-sans leading-relaxed mb-8">
            {t.aboutText}
          </p>

          <div className="bg-[#F4F2EF] rounded-3xl p-8 mb-8">
            <h3 className="text-3xl font-serif font-bold text-[#336021] mb-6">
              {t.ourCommitment}
            </h3>
            <ul className="space-y-3">
              {[
                t.personalizedService,
                t.seamlessLogistics,
                t.reliableSupport,
                t.carefullyPlanned,
                t.warmCustomerCare,
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#336021] mt-2 shrink-0"></div>
                  <span className="text-[#336021] font-sans text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg text-[#336021] max-w-3xl mx-auto italic leading-relaxed text-center font-sans">
            {t.closingMessage}
          </p>
          <div className="text-center mt-8">
            <p className="text-[#336021] font-serif font-bold text-2xl">
              {t.heroTagline}
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-20 lg:px-16 bg-[#F4F2EF]">
        <h2 className="text-5xl font-serif font-bold text-center text-[#336021] mb-16">
          {t.services}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Airline Tickets */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#336021] rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#336021] mb-4">
              {t.airlineTickets}
            </h3>
            <p className="text-[#336021] font-sans leading-relaxed">
              {t.airlineDescription}
            </p>
          </div>

          {/* Visa Services */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#E68C3A] rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#336021] mb-4">
              {t.visaServices}
            </h3>
            <p className="text-[#336021] font-sans leading-relaxed">
              {t.visaDescription}
            </p>
          </div>

          {/* Pilgrimage Tours */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#336021] rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#336021] mb-4">
              {t.pilgrimageTours}
            </h3>
            <p className="text-[#336021] font-sans leading-relaxed">
              {t.pilgrimageDescription}
            </p>
          </div>

          {/* Event Logistics */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-[#E68C3A] rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#336021] mb-4">
              {t.eventLogistics}
            </h3>
            <p className="text-[#336021] font-sans leading-relaxed">
              {t.eventDescription}
            </p>
          </div>

          {/* Leisure Tours */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-[#336021] rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#336021] mb-4">
              {t.leisureTours}
            </h3>
            <p className="text-[#336021] font-sans leading-relaxed">
              {t.leisureDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Discover the World Section */}
      <section id="gallery" className="px-6 py-20 lg:px-16 bg-white">
        <h2 className="text-5xl font-serif font-bold text-center text-[#336021] mb-16">
          {t.discoverTheWorld}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {t.destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-[#F4F2EF] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="relative h-64">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-[#E68C3A] mt-1 shrink-0" />
                  <span className="text-sm text-[#336021] font-serif">
                    {destination.location}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#336021] mb-6">
                  {destination.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-serif font-bold text-[#E68C3A]">
                      ${destination.price}
                    </span>
                    <span className="text-sm text-[#336021] font-serif">
                      /{t.person}
                    </span>
                  </div>
                  <Button
                    asChild
                    className="bg-[#E68C3A] hover:bg-[#d67d2f] text-white rounded-full px-6 font-serif shadow-lg"
                  >
                    <Link href={`/destinations/${destination.slug}`}>
                      {t.viewDetails}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="px-6 py-20 lg:px-16 bg-linear-to-br from-[#336021] to-[#2a4d1a] text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            {t.getStarted}
          </h2>
          <p className="text-lg font-sans mb-8 leading-relaxed">
            {t.heroDescription}
          </p>
          <Button
            asChild
            className="bg-[#E68C3A] hover:bg-[#d67d2f] text-white text-2xl rounded-full px-12 py-6 font-serif shadow-2xl hover:scale-105 transition-transform"
            onClick={() => {
              gtag.event({
                action: "book_now_click",
                category: "engagement",
                label: "home_page_cta",
              });
            }}
          >
            <Link href={`mailto:${t.contactEmail}`}>{t.bookNowCta}</Link>
          </Button>
        </div>
      </section>

      <footer className="px-6 py-12 lg:px-16 bg-[#D8D1BD] border-t border-[#336021]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mx-auto">
            <div className="flex items-center">
              <Image
                src="/manjo-logo.png"
                alt="Manjo Travel and Tours"
                width={180}
                height={60}
                className="h-24 w-auto"
              />
            </div>

            <div className="flex gap-4 items-center">
              <Link href="https://wa.me">
                <Image
                  src="/icon/whatsapp-icon.svg"
                  alt="wa"
                  width={22}
                  height={22}
                  className="size-6"
                />
              </Link>
              <Link href={`mailto:${t.contactEmail}`}>
                <Mail className="size-6" />
              </Link>
              <Link href="https://instagram.com/manjo.travel">
                <Instagram className="size-6" />
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#336021]/20 text-center">
            <p className="text-[#336021] font-serif text-sm">
              © 2025 Manjo Travel and Tours. All rights reserved. |{" "}
              {t.heroTagline}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
