import { SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  const { userId, sessionClaims } = auth();
  return (
    <header className="flex items-center justify-between px-8 border-b mb-5">
      <aside className="flex items-center justify-center h-20 overflow-hidden">
        <Link href="/">
          <Image
            src="https://links.papareact.com/xgu"
            alt="logo"
            width={200}
            height={200}
            className="object-contain h-32 cursor-pointer"
          />
        </Link>
      </aside>
      {userId ? (
        <aside>
          <UserButton />
        </aside>
      ) : (
        <aside>
          <SignInButton afterSignInUrl="/translate" mode="modal"/>
        </aside>
      )}
    </header>
  );
}

export default Header;
