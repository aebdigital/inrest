import { redirect } from "next/navigation";
import { realizationPages } from "@/data/source-pages";

export default function RealizationsPage() {
  redirect(`/realizacie/${realizationPages[0].slug}`);
}
