import { Link } from "@/modules/localization";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("main-page");

  return (
    <main className="h-screen w-screen overflow-x-hidden overflow-y-auto bg-slate-300 p-5">
      <h1 className="text-4xl">{t("content")}</h1>
      <Link href="/" locale="ua">
        Main
      </Link>
    </main>
  );
}
