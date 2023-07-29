"use client";
import { Button } from "@/components/pages/Auth/style";
import { store } from "@/stores";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleGoToHome = () => {
    router.push(`/${store.language.currentLanguage}`);
  };

  return (
    <div className="bg">
      <h1>404</h1>
      <p>Could not find requested resource</p>
      <Button theme={"dark"} onClick={handleGoToHome} style={{ width: 250 }}>
        Go to home page
      </Button>
    </div>
  );
}
