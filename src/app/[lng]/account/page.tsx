import { Account } from "@/components/pages/Account";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/dist/client/components/headers";
import { redirect } from "next/navigation";
import { Database } from "../../../../lib/database.types";
import getURL from "@/utils/functions/getURL";

export default async function Page() {
  const supabase = createServerComponentClient<Database>({
    cookies,
  });

  const { data } = await supabase.auth.getUser();
  const user = data.user;

  if (!user) {
    redirect(`${getURL("/")}/login`);
  }

  return <Account />;
}
