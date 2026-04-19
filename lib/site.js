export const siteConfig = {
  name: "INREST",
  legalName: "INREST, s. r. o.",
  url: "https://www.inrestsro.sk",
  description:
    "INREST s.r.o. z Považskej Bystrice realizuje opláštenia budov, hydroizolácie plochých striech, strešné svetlíky, klampiarsku výrobu a doplnkové stavebné práce.",
  email: "inrestsro@inrestsro.sk",
  phone: "+421 908 264 970",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
