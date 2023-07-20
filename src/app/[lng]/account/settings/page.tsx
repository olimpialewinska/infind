import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/dist/client/components/headers";
import { redirect } from "next/navigation";
import getURL from "@/utils/functions/getURL";
import { Database } from "../../../../../lib/database.types";
import { Settings } from "@/components/pages/Auth/Settings";

export default async function Page() {
  const supabase = createServerComponentClient<Database>({
    cookies,
  });

  const { data } = await supabase.auth.getUser();
  const user = data.user;

  if (!user) {
    redirect(`${getURL("/")}/login`);
  }

  return <Settings />;
}
