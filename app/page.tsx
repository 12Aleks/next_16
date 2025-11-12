import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <>
    <main className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col gap-4 text-base font-medium [&_a]:w-full">
          <Link
            className="border flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="/posts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            See all posts
          </Link>
          <Link
            className="border flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[350px]"
            href="/about"
            target="_blank"
            rel="noopener noreferrer"
          >
              <Image
                  className="dark:invert"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={16}
                  height={16}
              />
            About subpage and redirect with proxy
          </Link>
            <Link
                className="border flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[350px]"
                href="/react"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    className="dark:invert"
                    src="/vercel.svg"
                    alt="Vercel logomark"
                    width={16}
                    height={16}
                />
                React 19.2
            </Link>
        </div>

    </main>
      </>
  );
}
