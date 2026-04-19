export default function manifest() {
  return {
    name: "INREST",
    short_name: "INREST",
    description:
      "INREST s.r.o. - opláštenia budov, hydroizolácie, strešné svetlíky a klampiarska výroba.",
    start_url: "/",
    display: "standalone",
    background_color: "#08101a",
    theme_color: "#08101a",
    lang: "sk",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
