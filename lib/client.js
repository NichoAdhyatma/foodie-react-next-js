import sanityClient from "@sanity/client";
import ImageUrlBuilder  from "@sanity/image-url";
export const client = sanityClient({
  projectId: "q4pi53g4",
  dataset: "production",
  apiVersion: "2022-01-10",
  useCdn: true,
  token:
    "skgebr9oKueWQ0iN6oWxK6hS6HIlP5TT1HDmc7O5Z22sgB4fZVFFTPwWTZf4EiDzsKjtsdlE3SKfopmCbyaTMBbd4gLtx7dFlelAfpudbEGCVKOpdrZGXSGidgsHrN48g1fzR1txDGCwVOFc7jEnGusAd9EXFPloSzq0xHzwB0Bvsg0f9yUe",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
