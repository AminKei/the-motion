export default function NotFound() {
  return (
    <main className="min-h-screen bg-black  flex items-center justify-center p-6">
      <section className="relative w-full max-w-5xl bg-white backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center p-8 md:p-12">
            <svg
              width="360"
              height="260"
              viewBox="0 0 360 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Not Found illustration"
              role="img"
            >
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#60a5fa" offset="0%" />
                  <stop stopColor="#a78bfa" offset="100%" />
                </linearGradient>
              </defs>
              <g transform="translate(20,20)">
                <ellipse
                  cx="160"
                  cy="120"
                  rx="120"
                  ry="60"
                  fill="url(#grad)"
                  opacity="0.25"
                >
                  <animate
                    attributeName="rx"
                    from="100"
                    to="120"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </ellipse>
                <circle cx="100" cy="60" r="6" fill="#374151">
                  <animate
                    attributeName="cy"
                    values="60;40;60"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="140" cy="60" r="6" fill="#374151">
                  <animate
                    attributeName="cy"
                    values="60;25;60"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <path
                  d="M60 120 C100 80, 140 160, 200 120"
                  stroke="#374151"
                  strokeWidth="4"
                  fill="none"
                  opacity="0.8"
                >
                  <animate
                    attributeName="d"
                    dur="3s"
                    repeatCount="indefinite"
                    values="
                    M60 120 C100 80,140 160,200 120;
                    M60 122 C100 78,140 162,200 122;
                    M60 120 C100 80,140 160,200 120"
                  />
                </path>
              </g>
            </svg>
          </div>

          <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-800">
              Not Found
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              We can’t seem to find the resource you’re looking for. It might
              have been moved or never existed.
            </p>

            <a href="/" aria-label="Return Home">
              <a className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span>Return Home</span>
              </a>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
