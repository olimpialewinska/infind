import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/dist/client/components/headers";
import { redirect } from "next/navigation";
import { Database } from "../../../../lib/database.types";
import getURL from "@/utils/functions/getURL";
import { ForgottenPassword } from "@/components/pages/Auth/ForgottenPassword";

export default async function Page() {
  const supabase = createServerComponentClient<Database>({
    cookies,
  });

  const { data } = await supabase.auth.getUser();
  const user = data.user;

  if (user) {
    redirect(`${getURL("/")}/account`);
  }

  return <ForgottenPassword />;
}
