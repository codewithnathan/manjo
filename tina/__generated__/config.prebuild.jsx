// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "home",
        label: "Home Page",
        path: "content/home",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: "string",
            name: "locale",
            label: "Language",
            required: true,
            options: [
              { value: "en", label: "English" },
              { value: "id", label: "Indonesian" }
            ]
          },
          {
            type: "object",
            name: "navigation",
            label: "Navigation",
            fields: [
              { type: "string", name: "home", label: "Home" },
              { type: "string", name: "aboutUs", label: "About Us" },
              { type: "string", name: "ourService", label: "Our Service" },
              { type: "string", name: "tourpackages", label: "Tour Packages" },
              { type: "string", name: "gallery", label: "Gallery" },
              { type: "string", name: "contactus", label: "Contact Us" },
              { type: "string", name: "blog", label: "Blog" },
              { type: "string", name: "bookNow", label: "Book Now" }
            ]
          },
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "explore", label: "Explore Text" },
              { type: "string", name: "world", label: "World Text" },
              {
                type: "string",
                name: "travelDescription",
                label: "Travel Description",
                ui: { component: "textarea" }
              },
              { type: "string", name: "heroTagline", label: "Hero Tagline" },
              {
                type: "string",
                name: "heroDescription",
                label: "Hero Description",
                ui: { component: "textarea" }
              },
              { type: "string", name: "travelPlaces", label: "Travel Places" },
              { type: "string", name: "ourStory", label: "Our Story" },
              {
                type: "string",
                name: "ourStoryDescription",
                label: "Our Story Description",
                ui: { component: "textarea" }
              }
            ]
          },
          {
            type: "object",
            name: "about",
            label: "About Section",
            fields: [
              { type: "string", name: "aboutTitle", label: "Title" },
              {
                type: "string",
                name: "aboutDescription",
                label: "Description",
                ui: { component: "textarea" }
              },
              {
                type: "string",
                name: "aboutText",
                label: "About Text",
                ui: { component: "textarea" }
              },
              {
                type: "string",
                name: "ourCommitment",
                label: "Our Commitment"
              },
              {
                type: "string",
                name: "personalizedService",
                label: "Personalized Service"
              },
              {
                type: "string",
                name: "seamlessLogistics",
                label: "Seamless Logistics"
              },
              {
                type: "string",
                name: "reliableSupport",
                label: "Reliable Support"
              },
              {
                type: "string",
                name: "carefullyPlanned",
                label: "Carefully Planned"
              },
              {
                type: "string",
                name: "warmCustomerCare",
                label: "Warm Customer Care"
              },
              {
                type: "string",
                name: "closingMessage",
                label: "Closing Message",
                ui: { component: "textarea" }
              }
            ]
          },
          {
            type: "object",
            name: "features",
            label: "Features Section",
            fields: [
              { type: "string", name: "featuresTitle", label: "Title" },
              {
                type: "string",
                name: "featuresDescription",
                label: "Description",
                ui: { component: "textarea" }
              }
            ]
          },
          {
            type: "object",
            name: "services",
            label: "Services Section",
            fields: [
              { type: "string", name: "services", label: "Services Title" },
              {
                type: "string",
                name: "airlineTickets",
                label: "Airline Tickets"
              },
              {
                type: "string",
                name: "airlineDescription",
                label: "Airline Description",
                ui: { component: "textarea" }
              },
              { type: "string", name: "visaServices", label: "Visa Services" },
              {
                type: "string",
                name: "visaDescription",
                label: "Visa Description",
                ui: { component: "textarea" }
              },
              {
                type: "string",
                name: "pilgrimageTours",
                label: "Pilgrimage Tours"
              },
              {
                type: "string",
                name: "pilgrimageDescription",
                label: "Pilgrimage Description",
                ui: { component: "textarea" }
              },
              {
                type: "string",
                name: "eventLogistics",
                label: "Event Logistics"
              },
              {
                type: "string",
                name: "eventDescription",
                label: "Event Description",
                ui: { component: "textarea" }
              },
              { type: "string", name: "leisureTours", label: "Leisure Tours" },
              {
                type: "string",
                name: "leisureDescription",
                label: "Leisure Description",
                ui: { component: "textarea" }
              }
            ]
          },
          {
            type: "object",
            name: "gallery",
            label: "Gallery Section",
            fields: [
              {
                type: "string",
                name: "discoverTheWorld",
                label: "Discover The World"
              },
              { type: "string", name: "viewDetails", label: "View Details" },
              { type: "string", name: "person", label: "Person" },
              {
                type: "string",
                name: "circularText",
                label: "Circular Text",
                ui: { component: "textarea" }
              }
            ]
          },
          {
            type: "object",
            name: "cta",
            label: "Call to Action",
            fields: [
              { type: "string", name: "getStarted", label: "Get Started" },
              { type: "string", name: "bookNowCta", label: "Book Now CTA" }
            ]
          },
          {
            type: "object",
            name: "contact",
            label: "Contact Information",
            fields: [
              { type: "string", name: "contactEmail", label: "Email" },
              { type: "string", name: "contactPhone", label: "Phone" },
              { type: "string", name: "domainName", label: "Domain Name" }
            ]
          }
        ]
      },
      {
        name: "destination",
        label: "Destinations",
        path: "content/destinations",
        format: "md",
        fields: [
          {
            type: "string",
            name: "locale",
            label: "Language",
            required: true,
            options: [
              { value: "en", label: "English" },
              { value: "id", label: "Indonesian" }
            ]
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
            description: "URL-friendly identifier (e.g., shadowpeak-canyon)"
          },
          {
            type: "string",
            name: "name",
            label: "Destination Name",
            required: true
          },
          {
            type: "string",
            name: "location",
            label: "Location",
            required: true
          },
          {
            type: "number",
            name: "price",
            label: "Price (per person)",
            required: true
          },
          {
            type: "image",
            name: "image",
            label: "Main Image",
            required: true
          },
          {
            type: "object",
            name: "gallery",
            label: "Image Gallery",
            list: true,
            fields: [
              {
                type: "image",
                name: "image",
                label: "Image"
              },
              {
                type: "string",
                name: "caption",
                label: "Caption"
              }
            ]
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            required: true
          },
          {
            type: "object",
            name: "highlights",
            label: "Highlights",
            list: true,
            fields: [
              {
                type: "string",
                name: "highlight",
                label: "Highlight"
              }
            ]
          },
          {
            type: "rich-text",
            name: "itinerary",
            label: "Itinerary"
          },
          {
            type: "object",
            name: "included",
            label: "What's Included",
            list: true,
            fields: [
              {
                type: "string",
                name: "item",
                label: "Item"
              }
            ]
          },
          {
            type: "object",
            name: "excluded",
            label: "What's Not Included",
            list: true,
            fields: [
              {
                type: "string",
                name: "item",
                label: "Item"
              }
            ]
          },
          {
            type: "number",
            name: "duration",
            label: "Duration (days)"
          },
          {
            type: "string",
            name: "difficulty",
            label: "Difficulty Level",
            options: ["Easy", "Moderate", "Challenging", "Difficult"]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
