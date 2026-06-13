import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-[90dvh] bg-black/50 w-full flex items-center justify-center px-4">
      <section
        aria-labelledby="not-found-title"
        className="w-full max-w-2xl rounded-2xl bg-linear-to-br from-[#1a1a1a] via-[#111] to-black border border-[#c79863]/30 shadow-[0_0_20px_#c79863]/20 backdrop-blur-md p-8 md:p-12"
      >
        <div className="mx-auto max-w-xl text-center">
          <div
            className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold text-white tracking-wide shadow-inner"
            style={{ borderColor: "#c79863", backgroundColor: "#c79863" }}
          >
            404
            <span className="sr-only">{"HTTP status: 404 Not Found"}</span>
          </div>

          <h1
            id="not-found-title"
            className="mt-6 text-4xl md:text-5xl font-bold text-balance text-white drop-shadow"
          >
            Oops! Page not found
          </h1>

          <p className="mt-4 leading-relaxed text-white/80 text-base md:text-lg">
            Sorry, we couldn’t find the page you’re looking for. It might have
            been moved, renamed, or no longer exists.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="w-full bg-[#c79863]/10 py-[1.30rem] border border-[#c79863]/60 px-10 sm:w-auto group relative overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_20px_#c79863]/40"
            >
              <Link href="/" className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>

                Go to Homepage
                </span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full hover:text-white py-5 px-10 sm:w-auto group relative overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:bg-[#c79863]/10 hover:border-[#c79863]/60"
            >
              <Link href="/contact-us" className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span>

                Contact Support
                </span>
              </Link>
            </Button>
          </div>

          <div className="mt-10 h-px w-full" style={{ backgroundColor: "#c79863" }} />

          <p className="mt-6 text-xs text-white/70">
            If you believe this is an error, please let us know so we can fix
            it.
          </p>
        </div>
      </section>
    </main>
  );
}
