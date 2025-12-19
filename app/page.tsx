import { getHomeContent, getAllDestinations } from "@/lib/tina";
import LandingPageClient from "./LandingPageClient";

export default async function LandingPage() {
  const enData = await getHomeContent("en");
  const idData = await getHomeContent("id");
  const enDestinations = await getAllDestinations("en");
  const idDestinations = await getAllDestinations("id");

  if (!enData || !idData) {
    return <div>Error loading content</div>;
  }

  const translations = {
    ENG: {
      ...enData.navigation,
      ...enData.hero,
      ...enData.about,
      ...enData.features,
      ...enData.services,
      ...enData.gallery,
      ...enData.cta,
      ...enData.contact,
      destinations: enDestinations.map((d: any) => ({
        name: d.name,
        location: d.location,
        price: d.price,
        image: d.image,
        slug: d.slug,
      })),
    } as any,
    IND: {
      ...idData.navigation,
      ...idData.hero,
      ...idData.about,
      ...idData.features,
      ...idData.services,
      ...idData.gallery,
      ...idData.cta,
      ...idData.contact,
      destinations: idDestinations.map((d: any) => ({
        name: d.name,
        location: d.location,
        price: d.price,
        image: d.image,
        slug: d.slug,
      })),
    } as any,
  };

  return <LandingPageClient initialTranslations={translations} />;
}
