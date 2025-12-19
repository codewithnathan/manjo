import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Clock, TrendingUp, Check, X } from "lucide-react";
import { getDestinationBySlug } from "@/lib/tina";
import TinaRichText from "@/components/TinaRichText";
import BookNowButton from "./BookNowButton";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
}

export const revalidate = 60;

export default async function DestinationDetailPage(props: PageProps) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const slug = params.slug;
  const rawLang = searchParams.lang;
  const language = rawLang === "id" ? "id" : "en";

  const destination = await getDestinationBySlug(slug, language);

  if (!destination) {
    return (
      <div className="min-h-screen bg-[#F4F2EF] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-[#336021] mb-4">
            Destination Not Found
          </h1>
          <Button
            asChild
            className="bg-[#E68C3A] hover:bg-[#d67d2f] text-white rounded-full px-8 font-serif"
          >
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const difficultyColors: Record<string, string> = {
    Easy: "bg-green-100 text-green-800",
    Moderate: "bg-yellow-100 text-yellow-800",
    Challenging: "bg-orange-100 text-orange-800",
    Difficult: "bg-red-100 text-red-800",
  };

  return (
    <div className="min-h-screen bg-[#F4F2EF]">
      {/* Header */}
      <header className="px-6 py-4 lg:px-16 flex items-center justify-between border-b border-[#D8D1BD] fixed top-0 left-0 w-full bg-[#F4F2EF] z-20">
        <div className="flex items-center gap-4">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="text-[#336021] hover:bg-[#D8D1BD]/30"
          >
            <Link href="/">
              <ArrowLeft className="w-6 h-6" />
            </Link>
          </Button>
          <Image
            src="/manjo-logo.png"
            alt="Manjo Travel and Tours"
            width={200}
            height={70}
            className="h-14 w-auto"
          />
        </div>

        <div className="flex items-center gap-1 border-2 border-[#336021] rounded-full p-1">
          <Link
            href={`/destinations/${slug}?lang=id`}
            className={`px-4 py-1.5 rounded-full text-sm font-serif font-bold transition-all ${
              language === "id"
                ? "bg-[#336021] text-white"
                : "text-[#336021] hover:bg-[#D8D1BD]/30"
            }`}
          >
            IND
          </Link>
          <Link
            href={`/destinations/${slug}?lang=en`}
            className={`px-4 py-1.5 rounded-full text-sm font-serif font-bold transition-all ${
              language === "en"
                ? "bg-[#336021] text-white"
                : "text-[#336021] hover:bg-[#D8D1BD]/30"
            }`}
          >
            ENG
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] mt-20">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 py-12 lg:px-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[#E68C3A]" />
              <span className="text-white font-serif text-lg">
                {destination.location}
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
              {destination.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              {destination.duration && (
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4 text-white" />
                  <span className="text-white font-sans">
                    {destination.duration} {language === "en" ? "days" : "hari"}
                  </span>
                </div>
              )}
              {destination.difficulty && (
                <div
                  className={`px-4 py-2 rounded-full font-sans text-sm font-semibold ${
                    difficultyColors[destination.difficulty] ||
                    "bg-gray-100 text-gray-800"
                  }`}
                >
                  <TrendingUp className="w-4 h-4 inline mr-1" />
                  {destination.difficulty}
                </div>
              )}
              <div className="flex items-baseline gap-1 bg-[#E68C3A] px-6 py-2 rounded-full">
                <span className="text-3xl font-serif font-bold text-white">
                  ${destination.price}
                </span>
                <span className="text-sm text-white font-serif">
                  /{language === "en" ? "person" : "orang"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#336021] mb-6">
                {language === "en" ? "About This Tour" : "Tentang Tur Ini"}
              </h2>
              <div className="prose prose-lg max-w-none text-[#336021] font-sans leading-relaxed">
                <TinaRichText content={destination.description} />
              </div>
            </div>

            {/* Highlights */}
            {destination.highlights && destination.highlights.length > 0 && (
              <div>
                <h2 className="text-3xl font-serif font-bold text-[#336021] mb-6">
                  {language === "en" ? "Highlights" : "Sorotan"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.highlights.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-white rounded-2xl p-4 shadow-sm"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#336021] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[#336021] font-sans">
                        {item.highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Itinerary */}
            {destination.itinerary && (
              <div>
                <h2 className="text-3xl font-serif font-bold text-[#336021] mb-6">
                  {language === "en" ? "Itinerary" : "Rencana Perjalanan"}
                </h2>
                <div className="prose prose-lg max-w-none text-[#336021] font-sans bg-white rounded-3xl p-8 shadow-sm">
                  <TinaRichText content={destination.itinerary} />
                </div>
              </div>
            )}

            {/* Gallery */}
            {destination.gallery && destination.gallery.length > 0 && (
              <div>
                <h2 className="text-3xl font-serif font-bold text-[#336021] mb-6">
                  {language === "en" ? "Gallery" : "Galeri"}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {destination.gallery.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <Image
                        src={item.image}
                        alt={item.caption || `Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Terms and Agreements */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#336021] mb-6">
                {language === "en"
                  ? "Terms & Agreements"
                  : "Syarat & Ketentuan"}
              </h2>
              <div className="bg-white rounded-3xl p-8 shadow-sm space-y-6">
                {/* Booking Terms */}
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#336021] mb-3">
                    {language === "en" ? "Booking Terms" : "Syarat Pemesanan"}
                  </h3>
                  <ul className="space-y-2 text-[#336021] font-sans text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#E68C3A] mt-1">•</span>
                      <span>
                        {language === "en"
                          ? "All bookings must be confirmed with a minimum 30% deposit"
                          : "Semua pemesanan harus dikonfirmasi dengan deposit minimum 30%"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E68C3A] mt-1">•</span>
                      <span>
                        {language === "en"
                          ? "Full payment is required 14 days before departure"
                          : "Pembayaran penuh diperlukan 14 hari sebelum keberangkatan"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E68C3A] mt-1">•</span>
                      <span>
                        {language === "en"
                          ? "Booking confirmation will be sent via email within 24 hours"
                          : "Konfirmasi pemesanan akan dikirim melalui email dalam 24 jam"}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Payment Policy */}
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#336021] mb-3">
                    {language === "en"
                      ? "Payment Policy"
                      : "Kebijakan Pembayaran"}
                  </h3>
                  <ul className="space-y-2 text-[#336021] font-sans text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#E68C3A] mt-1">•</span>
                      <span>
                        {language === "en"
                          ? "We accept bank transfers, credit cards, and PayPal"
                          : "Kami menerima transfer bank, kartu kredit, dan PayPal"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E68C3A] mt-1">•</span>
                      <span>
                        {language === "en"
                          ? "All prices are in USD unless otherwise stated"
                          : "Semua harga dalam USD kecuali dinyatakan lain"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E68C3A] mt-1">•</span>
                      <span>
                        {language === "en"
                          ? "Payment receipts will be provided for all transactions"
                          : "Tanda terima pembayaran akan diberikan untuk semua transaksi"}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Cancellation Policy */}
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#336021] mb-3">
                    {language === "en"
                      ? "Cancellation Policy"
                      : "Kebijakan Pembatalan"}
                  </h3>
                  <ul className="space-y-2 text-[#336021] font-sans text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#E68C3A] mt-1">•</span>
                      <span>
                        {language === "en"
                          ? "30+ days before departure: 90% refund"
                          : "30+ hari sebelum keberangkatan: Pengembalian 90%"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E68C3A] mt-1">•</span>
                      <span>
                        {language === "en"
                          ? "15-29 days before departure: 50% refund"
                          : "15-29 hari sebelum keberangkatan: Pengembalian 50%"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E68C3A] mt-1">•</span>
                      <span>
                        {language === "en"
                          ? "Less than 14 days: No refund"
                          : "Kurang dari 14 hari: Tidak ada pengembalian"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E68C3A] mt-1">•</span>
                      <span>
                        {language === "en"
                          ? "Cancellations must be submitted in writing"
                          : "Pembatalan harus diajukan secara tertulis"}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Travel Requirements */}
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#336021] mb-3">
                    {language === "en"
                      ? "Travel Requirements"
                      : "Persyaratan Perjalanan"}
                  </h3>
                  <ul className="space-y-2 text-[#336021] font-sans text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#E68C3A] mt-1">•</span>
                      <span>
                        {language === "en"
                          ? "Valid passport with minimum 6 months validity"
                          : "Paspor yang valid dengan masa berlaku minimum 6 bulan"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E68C3A] mt-1">•</span>
                      <span>
                        {language === "en"
                          ? "Visa requirements vary by destination (we provide assistance)"
                          : "Persyaratan visa bervariasi berdasarkan tujuan (kami memberikan bantuan)"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E68C3A] mt-1">•</span>
                      <span>
                        {language === "en"
                          ? "Travel insurance is highly recommended"
                          : "Asuransi perjalanan sangat direkomendasikan"}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Health & Safety */}
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#336021] mb-3">
                    {language === "en"
                      ? "Health & Safety"
                      : "Kesehatan & Keselamatan"}
                  </h3>
                  <ul className="space-y-2 text-[#336021] font-sans text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#E68C3A] mt-1">•</span>
                      <span>
                        {language === "en"
                          ? "Participants must be in good health and physically fit for the tour"
                          : "Peserta harus dalam kesehatan yang baik dan bugar secara fisik untuk tur"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E68C3A] mt-1">•</span>
                      <span>
                        {language === "en"
                          ? "Medical conditions must be disclosed at time of booking"
                          : "Kondisi medis harus diungkapkan saat pemesanan"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E68C3A] mt-1">•</span>
                      <span>
                        {language === "en"
                          ? "Follow all safety instructions provided by guides"
                          : "Ikuti semua instruksi keselamatan yang diberikan oleh pemandu"}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Liability */}
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#336021] mb-3">
                    {language === "en" ? "Liability" : "Tanggung Jawab"}
                  </h3>
                  <p className="text-[#336021] font-sans text-sm leading-relaxed">
                    {language === "en"
                      ? "Manjo Travel and Tours acts as an agent for tour participants and is not liable for any loss, injury, or damage to persons or property. Participants are responsible for their own travel insurance and personal belongings."
                      : "Manjo Travel and Tours bertindak sebagai agen untuk peserta tur dan tidak bertanggung jawab atas kehilangan, cedera, atau kerusakan pada orang atau properti. Peserta bertanggung jawab atas asuransi perjalanan dan barang pribadi mereka sendiri."}
                  </p>
                </div>

                {/* General Terms */}
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#336021] mb-3">
                    {language === "en" ? "General Terms" : "Ketentuan Umum"}
                  </h3>
                  <ul className="space-y-2 text-[#336021] font-sans text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#E68C3A] mt-1">•</span>
                      <span>
                        {language === "en"
                          ? "Itineraries may change due to weather or unforeseen circumstances"
                          : "Rencana perjalanan dapat berubah karena cuaca atau keadaan tak terduga"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E68C3A] mt-1">•</span>
                      <span>
                        {language === "en"
                          ? "Minimum group size may be required for tour departure"
                          : "Ukuran grup minimum mungkin diperlukan untuk keberangkatan tur"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E68C3A] mt-1">•</span>
                      <span>
                        {language === "en"
                          ? "By booking, you agree to these terms and conditions"
                          : "Dengan memesan, Anda menyetujui syarat dan ketentuan ini"}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Contact for Questions */}
                <div className="pt-4 border-t border-[#D8D1BD]">
                  <p className="text-[#336021] font-sans text-sm italic">
                    {language === "en"
                      ? "For questions about our terms and conditions, please contact us at booking@manjotravel.com"
                      : "Untuk pertanyaan tentang syarat dan ketentuan kami, silakan hubungi kami di booking@manjotravel.com"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* What's Included */}
            {destination.included && destination.included.length > 0 && (
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <h3 className="text-2xl font-serif font-bold text-[#336021] mb-4">
                  {language === "en" ? "What's Included" : "Yang Termasuk"}
                </h3>
                <ul className="space-y-3">
                  {destination.included.map((item: any, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-[#336021] font-sans text-sm">
                        {item.item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* What's Not Included */}
            {destination.excluded && destination.excluded.length > 0 && (
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <h3 className="text-2xl font-serif font-bold text-[#336021] mb-4">
                  {language === "en"
                    ? "What's Not Included"
                    : "Yang Tidak Termasuk"}
                </h3>
                <ul className="space-y-3">
                  {destination.excluded.map((item: any, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-[#336021] font-sans text-sm">
                        {item.item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Book Now CTA */}
            <div className="bg-gradient-to-br from-[#336021] to-[#2a4d1a] rounded-3xl p-8 text-white shadow-lg sticky top-24">
              <h3 className="text-2xl font-serif font-bold mb-2">
                {language === "en"
                  ? "Ready to Explore?"
                  : "Siap untuk Menjelajah?"}
              </h3>
              <p className="text-white/90 font-sans mb-6">
                {language === "en"
                  ? "Book your adventure today and create memories that last a lifetime."
                  : "Pesan petualangan Anda hari ini dan ciptakan kenangan yang bertahan seumur hidup."}
              </p>
              <BookNowButton
                slug={slug}
                language={language}
                className="w-full bg-[#E68C3A] hover:bg-[#d67d2f] text-white text-lg rounded-full py-6 font-serif shadow-xl hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 lg:px-16 bg-[#D8D1BD] border-t border-[#336021]/20">
        <div className="max-w-7xl mx-auto text-center">
          <Image
            src="/manjo-logo.png"
            alt="Manjo Travel and Tours"
            width={180}
            height={60}
            className="h-20 w-auto mx-auto mb-6"
          />
          <p className="text-[#336021] font-serif text-sm">
            © 2025 Manjo Travel and Tours. All rights reserved. |{" "}
            {language === "en"
              ? "Your journey, our priority."
              : "Perjalanan Anda, prioritas kami."}
          </p>
        </div>
      </footer>
    </div>
  );
}
