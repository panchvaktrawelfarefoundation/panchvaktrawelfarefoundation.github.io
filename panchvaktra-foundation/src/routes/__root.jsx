import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { DefaultCatchBoundary } from "@/components/DefaultCatchBoundary";
import { NotFound } from "@/components/NotFound";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/lib/AuthContext";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import appCss from "@/index.css?url";

export const Route = createRootRoute({
  // Per-page <title>/meta come from each route's head(); this is the shared base.
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "google-site-verification",
        content: "RHD3Qoq_5IwT7z8_bgMvftQfC00x-UMw7QkpD-980tc",
      },
      { title: "Panchvaktra Human Welfare Foundation" },
      {
        name: "description",
        content:
          "Serving humanity, creating hope — the Panchvaktra Human Welfare Foundation supports underprivileged children and families across India.",
      },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/logos/ngo_watermark.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..800;1,400..700&family=Inter:wght@300..600&family=Tiro+Devanagari+Hindi&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
  component: RootComponent,
});

function RootComponent() {
  return (
    <AuthProvider>
      <Header />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </AuthProvider>
  );
}

// The document. There is no index.html: the server renders <html> from here.
function RootDocument({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="RHD3Qoq_5IwT7z8_bgMvftQfC00x-UMw7QkpD-980tc"
        />
        <HeadContent />
      </head>
      <body data-react-root="true">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
