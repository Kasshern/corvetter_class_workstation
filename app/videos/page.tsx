import Link from "next/link";

export default function VideosPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-amber transition-colors mb-4 font-mono text-sm"
          >
            <span>←</span> BACK TO TERMINAL
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-accent-cyan" />
            <span className="text-accent-cyan font-mono text-sm">
              VISUAL ARCHIVE
            </span>
          </div>
          <h1 className="text-4xl font-bold text-foreground">
            VIDEO LOGS
          </h1>
        </header>

        {/* Videos Grid */}
        <div className="grid gap-6">
          {/* Placeholder - Videos will be added here */}
          <div className="bg-background-secondary border border-border p-8 rounded text-center">
            <p className="text-foreground-muted font-mono">
              VIDEO ARCHIVE LOADING...
            </p>
            <p className="text-foreground-muted text-sm mt-2">
              Visual documentation awaiting upload...
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
