import { redirect } from "next/navigation";
import { servicePages } from "@/data/source-pages";

export default function SluzbyIndexPage() {
  redirect(`/sluzby/${servicePages[0].slug}`);
}
