// for page navigation & to sort on leftbar

export type EachRoute = {
    title: string;
    href: string;
    noLink?: true; // noLink will create a route segment (section) but cannot be navigated
    items?: EachRoute[];
    tag?: string;
};

export const ROUTES: EachRoute[] = [
    { title: "Introduction", href: "/introduction" },
    {
        title: "Quick Start Guide",
        href: "/quick-start-guide",
        items: [
            {
                title: "NextJS - SSR",
                href: "/ssr",
            },
        ],
    },
    { title: "Configuration", href: "/configuration" },
    {
        title: "API Reference",
        href: "/api-reference",
        items: [
            {
                title: "Search",
                href: "/search",
            },
            {
                title: "Movie Lists",
                href: "/movie-lists",
            },
            {
                title: "Images",
                href: "/images",
            },
            {
                title: "Movies",
                href: "/movies",
                items: [
                    {
                        title: "Details",
                        href: "/details",
                    },
                    {
                        title: "Alternative Titles",
                        href: "/alternative-titles",
                    },
                    {
                        title: "Changes",
                        href: "/changes",
                    },
                    {
                        title: "Credits",
                        href: "/credits",
                    },
                    {
                        title: "External IDs",
                        href: "/external-ids",
                    },
                    {
                        title: "Keywords",
                        href: "/keywords",
                    },
                    {
                        title: "Images",
                        href: "/images",
                    },
                    {
                        title: "Latest",
                        href: "/latest",
                    },
                    {
                        title: "Recommendations",
                        href: "/recommendations",
                    },
                    {
                        title: "Release Dates",
                        href: "/release-dates",
                    },
                    {
                        title: "Reviews",
                        href: "/reviews",
                    },
                    {
                        title: "Similar",
                        href: "/similar",
                    },
                    {
                        title: "Translations",
                        href: "/translations",
                    },
                    {
                        title: "Videos",
                        href: "/videos",
                    },
                    {
                        title: "Watch Providers",
                        href: "/watch-providers",
                    },
                ],
            },
        ],
    },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
    const ans: Page[] = [];
    if (!node.noLink) {
        ans.push({ title: node.title, href: node.href });
    }
    node.items?.forEach((subNode) => {
        const temp = { ...subNode, href: `${node.href}${subNode.href}` };
        ans.push(...getRecurrsiveAllLinks(temp));
    });
    return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
