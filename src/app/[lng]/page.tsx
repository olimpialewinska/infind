/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useTranslation } from "../i18n";
import { Footer } from "@/components/Footer";

export default async function Page({ params }: { params: { lng: string } }) {
  const { t } = await useTranslation(params.lng);
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${params.lng}/second-page`}>{t("to-second-page")}</Link>
      <br />
      <Link href={`/${params.lng}/client`}>{t("to-client-page")}</Link>
      <Footer lng={params.lng} />
    </>
  );
}
