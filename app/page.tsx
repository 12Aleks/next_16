import Image from "next/image";

export default function Home() {
  return (
      <>
    <main className="flex min-h-screen items-center justify-center">


        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
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
          </a>
          <a
            className="border flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[350px]"
            href="/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            About subpage and redirect with proxy
          </a>
        </div>

    </main>
      </>
  );
}
