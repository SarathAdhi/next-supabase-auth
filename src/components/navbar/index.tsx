import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@ui/button";
import Link from "next/link";
import {
  supabaseServerAction,
  supabaseServerComponent,
} from "@lib/supabase-server";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ui/dropdown-menu";
import { Lock, User } from "lucide-react";
import { revalidatePath } from "next/cache";

const Navbar = async () => {
  const supabase = supabaseServerComponent();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  async function signOut() {
    "use server";

    const supabase = supabaseServerAction();
    await supabase.auth.signOut();

    revalidatePath("/");
  }

  return (
    <header className="w-full">
      <div className="container p-4 sm:p-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Lock />
          <h5 className="mt-0.5">Next Level Auth</h5>
        </Link>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <User />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent sideOffset={5}>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem asChild>
                    <Link className="cursor-pointer" href="/profile">
                      Profile
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem className="p-0" asChild>
                    <form action={signOut}>
                      <Button
                        size="sm"
                        variant="destructive"
                        className="rounded-sm w-full"
                        type="submit"
                      >
                        Logout
                      </Button>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button asChild>
                <Link href="/login">Login</Link>
              </Button>
            </>
          )}

          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
