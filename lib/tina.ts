import client from "../tina/__generated__/client";

export async function getHomeContent(locale: "en" | "id") {
  const fileName = `home.${locale}.md`;

  try {
    const data = await client.queries.home(
      { relativePath: fileName },
      { fetchOptions: { cache: "no-store" } }
    );
    return data.data.home;
  } catch (error) {
    console.error("Error loading home content", error);
    return null;
  }
}

export async function getAllDestinations(locale: "en" | "id") {
  try {
    const data = await client.queries.destinationConnection(
      {
        filter: { locale: { eq: locale } },
      },
      { fetchOptions: { cache: "no-store" } }
    );

    return data.data.destinationConnection.edges?.map((e) => e?.node) || [];
  } catch (error) {
    console.error("Error loading destinations", error);
    return [];
  }
}

export async function getDestinationBySlug(slug: string, locale: "en" | "id") {
  try {
    const data = await client.queries.destination(
      {
        relativePath: `${slug}.${locale}.md`,
      },
      { fetchOptions: { cache: "no-store" } }
    );

    return data.data.destination;
  } catch (error) {
    console.error("Error loading destination", error);
    return null;
  }
}
