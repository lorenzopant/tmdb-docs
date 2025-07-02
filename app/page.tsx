import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { GitPullRequest, MoveUpRightIcon, TerminalSquareIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex sm:min-h-[87.5vh] min-h-[82vh] flex-col sm:items-center justify-center text-center sm:py-8 py-14">
            <Link
                href="https://github.com/lorenzopant/tmdb"
                target="_blank"
                className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12"
            >
                <GitPullRequest className="w-4 h-4 font-extrabold" /> Star on GitHub <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
            </Link>
            <h1 className="text-[1.80rem] leading-8 sm:px-8 md:leading-[4.5rem] font-bold mb-4 sm:text-6xl text-left sm:text-center">
                Best TMDB wrapper in town.
            </h1>
            <p className="mb-8 md:text-lg text-base  max-w-[1200px] text-muted-foreground text-left sm:text-center">
                TMDB API TS is a modern, fully-typed TypeScript wrapper for The Movie Database (TMDB) API v4. It provides a clean,
                lightweight SDK for searching, browsing, and interacting with TMDB data — perfect for web and mobile apps.
            </p>
            <div className="sm:flex sm:flex-row grid grid-cols-2 items-center sm;gap-5 gap-3 mb-8">
                <Link href={`/docs${page_routes[0].href}`} className={buttonVariants({ className: "px-6", size: "lg" })}>
                    Get Started
                </Link>
            </div>
            <span className="sm:flex hidden border p-3 rounded-lg flex-row items-start sm:gap-2 gap-0.5 text-muted-foreground text-md mt-5 -mb-12 max-[800px]:mb-12 font-code sm:text-base text-sm font-medium">
                <TerminalSquareIcon className="w-5 h-5 sm:mr-1 mt-0.5" />
                {"npm install @lorenzopant/tmdb"}
            </span>
        </div>
    );
}
