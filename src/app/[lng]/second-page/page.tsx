/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useTranslation } from "../../i18n";
import { Footer } from "@/components/Footer";

export default async function Page({ params }: { params: { lng: string } }) {
  const { t } = await useTranslation(params.lng, "second-page");
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${params.lng}`}>{t("back-to-home")}</Link>
      <Footer lng={params.lng} />
    </>
  );
}
