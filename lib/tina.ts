import client from "../tina/__generated__/client";

export { client };

export async function getHomeContent(locale: "en" | "id") {
  const fileName = `home.${locale}`;
  
  try {
    const result = await client.queries.home({
      relativePath: `${fileName}.md`,
    });
    
    return result.data.home;
  } catch (error) {
    console.error(`Error fetching home content for locale ${locale}:`, error);
    return null;
  }
}

export async function getAllDestinations(locale: "en" | "id") {
  try {
    const result = await client.queries.destinationConnection({
      filter: { locale: { eq: locale } },
    });
    
    return result.data.destinationConnection.edges?.map((edge) => edge?.node) || [];
  } catch (error) {
    console.error(`Error fetching destinations for locale ${locale}:`, error);
    return [];
  }
}

export async function getDestinationBySlug(slug: string, locale: "en" | "id") {
  const fileName = `${slug}.${locale}`;
  
  try {
    const result = await client.queries.destination({
      relativePath: `${fileName}.md`,
    });
    
    return result.data.destination;
  } catch (error) {
    console.error(`Error fetching destination ${slug} for locale ${locale}:`, error);
    return null;
  }
}
