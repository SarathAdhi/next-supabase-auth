import {
  createServerActionClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const supabaseServerComponent = () => {
  const cookieStore = cookies();
  return createServerComponentClient({
    cookies: () => cookieStore,
  });
};

export const supabaseServerAction = () => {
  const cookieStore = cookies();
  return createServerActionClient({
    cookies: () => cookieStore,
  });
};
