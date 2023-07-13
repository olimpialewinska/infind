"use client";

import Link from "next/link";
import { useTranslation } from "../../i18n/client";
import { useState } from "react";
import { Footer } from "@/components/Footer/client";

export default function Page({ params }: { params: { lng: string } }) {
  const { t } = useTranslation(params.lng, "client-page");
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>{t("title")}</h1>
      <p>{t("counter", { count: counter })}</p>
      <div>
        <button onClick={() => setCounter(Math.max(0, counter - 1))}>-</button>
        <button onClick={() => setCounter(Math.min(10, counter + 1))}>+</button>
      </div>
      <Link href={`/`}>
        <button type="button">{t("back-to-home")}</button>
      </Link>
      <Footer lng={params.lng} />
    </>
  );
}
