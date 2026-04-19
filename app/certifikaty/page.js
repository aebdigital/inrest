import { absoluteUrl } from "@/lib/site";
import { CertificatesContent } from "./certificates-content";

export const metadata = {
  title: "Certifikáty",
  description: "Certifikáty spoločnosti INREST s.r.o. - sme držiteľmi certifikátov ISO a produktových partnerských certifikácií.",
  alternates: {
    canonical: absoluteUrl("/certifikaty"),
  },
};

export default function CertificatesPage() {
  return (
    <main className="relative overflow-hidden pb-20">
      <CertificatesContent />
    </main>
  );
}
