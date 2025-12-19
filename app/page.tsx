import { getHomeContent, getAllDestinations } from "@/lib/tina";
import LandingPageClient from "./LandingPageClient";

interface PageProps {
  searchParams: Promise<{ lang?: string }>;
}

export const dynamic = "force-dynamic";

export default async function LandingPage(props: PageProps) {
  const searchParams = await props.searchParams;
  const rawLang = searchParams.lang;
  const language = rawLang === "id" ? "id" : "en";

  const homeData = await getHomeContent(language);
  const destinations = await getAllDestinations(language);

  if (!homeData) {
    return <div>Error loading content</div>;
  }

  const translations = {
    ...homeData.navigation,
    ...homeData.hero,
    ...homeData.about,
    ...homeData.features,
    ...homeData.services,
    ...homeData.gallery,
    ...homeData.cta,
    ...homeData.contact,
    destinations: destinations.map((d: any) => ({
      name: d.name,
      location: d.location,
      price: d.price,
      image: d.image,
      slug: d.slug,
    })),
  };

  return (
    <LandingPageClient
      t={translations as any}
      language={language === "id" ? "IND" : "ENG"}
    />
  );
}
