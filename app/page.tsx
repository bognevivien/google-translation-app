import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Link href={`/translate`}>
        {" "}
        <Button>Translation Here</Button>
      </Link>
    </main>
  );
}
