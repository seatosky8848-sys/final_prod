import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { Toaster } from "sonner";
import { absoluteUrl, SITE_URL } from "../lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(65,105,225,0.16),_transparent_38%),linear-gradient(135deg,#f5f4f1_0%,#ecebe7_100%)] px-4 py-16 sm:px-6">
      <div className="w-full max-w-3xl overflow-hidden rounded-[32px] border border-border bg-[#f5f4f1]/90 p-8 shadow-[0_30px_90px_-35px_rgba(0,0,0,0.28)] backdrop-blur sm:p-10 lg:p-14">
        <div className="max-w-2xl">
          <p className="eyebrow text-accent">— Lost in the journey</p>
          <h1 className="mt-4 font-display text-6xl font-bold leading-none sm:text-7xl lg:text-8xl">
            404
          </h1>
          <h2 className="mt-5 text-2xl font-semibold text-foreground sm:text-3xl">
            This page is off the route.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.75] text-muted-foreground sm:text-[16px]">
            The trail you were looking for seems to have moved. You can return to the expedition
            home, explore the mission, or head to the gallery for a deeper view of the journey.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#050505] px-6 text-[12px] font-medium uppercase tracking-[0.2em] text-[#f5f4f1] transition-colors hover:bg-accent"
            >
              Return Home
            </Link>
            <Link
              to="/mission"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border px-6 text-[12px] font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Explore Mission
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 text-[12px] uppercase tracking-[0.2em] text-muted-foreground">
            <Link to="/about" className="transition-colors hover:text-accent">
              About
            </Link>
            <Link to="/gallery" className="transition-colors hover:text-accent">
              Gallery
            </Link>
            <Link to="/contact" className="transition-colors hover:text-accent">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">This page didn't load.</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something interrupted the signal. Try again, or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="h-11 px-5 rounded-full bg-foreground text-background text-xs tracking-widest uppercase"
          >
            Try again
          </button>
          <a
            href="/"
            className="h-11 px-5 rounded-full border border-border inline-flex items-center text-xs tracking-widest uppercase"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ajay Lalwani — Sea to Sky | Vision Beyond Sight" },
      {
        name: "description",
        content:
          "A documentary expedition from India's coastline to the summit of Mount Everest. Endurance, accessibility, and the resilience of the human spirit.",
      },
      {
        name: "keywords",
        content:
          "Ajay Lalwani, Sea to Sky, Everest summit, visually impaired athlete, cycling expedition, endurance athlete, mountaineering India",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: "Ajay Lalwani" },
      { property: "og:site_name", content: "Ajay Lalwani" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: absoluteUrl("/hero-mountain.jpg") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ajay Lalwani — Sea to Sky" },
      { name: "twitter:image", content: absoluteUrl("/hero-mountain.jpg") },
      {
        name: "twitter:description",
        content: "A historic journey from the Indian coastline to the summit of Everest.",
      },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;900&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <>
      <HeadContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ajay Lalwani",
            url: SITE_URL,
            description:
              "Visually impaired endurance athlete, cyclist, and mountaineer leading the Sea to Sky expedition.",
            sameAs: [
              "https://www.instagram.com/ajay.lalwani.9277/",
              "https://www.facebook.com/share/1JYzBbviMY/",
              "https://youtu.be/xmQ_s_z2XII",
            ],
            knowsAbout: ["Endurance cycling", "Mountaineering", "Visual accessibility"],
          }),
        }}
      />
      <QueryClientProvider client={queryClient}>
        <SiteNav />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <SiteFooter />
        <Toaster position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}
