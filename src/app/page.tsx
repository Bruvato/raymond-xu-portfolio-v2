"use client";

import { ModeToggle } from "@/components/mode-toggle";

import Link from "next/dist/client/link";
import Image from "next/image";

import Gallery from "@/components/gallery";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex-col">
      <ModeToggle />
      <Button variant="outline" onClick={() => toast("Event has been created")}>
        Show Toast
      </Button>
      <div className="flex min-h-screen flex-row items-center justify-center gap-4">
        {/* <Image
        src="/logo.svg"
        alt="Icon"
        width={64}
        height={64}
        className="dark:invert"
      /> */}

        <Gallery />
      </div>
    </div>
  );
}
