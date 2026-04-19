import { redirect } from "next/navigation";

const legacyMap = {
  "referencie-hydroizolacie": "/realizacie/hydroizolacie",
  "referencie-oplastenia-budov": "/realizacie/oplastenia-budov",
  "referencie-svetliky": "/realizacie/svetliky",
  "referencie-rekonstrukcie-interierov-a-exterierov":
    "/realizacie/rekonstrukcie-interierov-a-exterierov",
};

export default async function ReferencieLegacyRedirectPage({ params }) {
  const { slug } = await params;
  const path = slug.join("/");
  redirect(legacyMap[path] || "/realizacie");
}
