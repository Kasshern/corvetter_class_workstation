import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-12 border-b border-border pb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-accent-amber animate-pulse" />
            <span className="text-accent-cyan font-mono text-sm">SYSTEM ONLINE</span>
          </div>
          <h1 className="text-5xl font-bold mb-2 text-foreground">
            ROCINANTE <span className="text-accent-amber">TERMINAL</span>
          </h1>
          <p className="text-foreground-muted font-mono">
            Keith Salzman - Blockchain & ML Engineer
          </p>
        </header>

        {/* Navigation Grid */}
        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <NavCard
            href="/projects"
            title="PROJECTS"
            description="View mission logs and completed operations"
            status="ACTIVE"
          />
          <NavCard
            href="/skills"
            title="SKILLS"
            description="Technical specifications and capabilities"
            status="ACTIVE"
          />
          <NavCard
            href="/experience"
            title="EXPERIENCE"
            description="Service record and duty history"
            status="ACTIVE"
          />
          <NavCard
            href="/education"
            title="EDUCATION"
            description="Training and certification records"
            status="ACTIVE"
          />
          <NavCard
            href="/videos"
            title="VIDEOS"
            description="Visual documentation archive"
            status="ACTIVE"
          />
          <NavCard
            href="/contact"
            title="CONTACT"
            description="Establish communication link"
            status="READY"
          />
        </nav>

        {/* Status Footer */}
        <footer className="border-t border-border pt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm">
            <StatusItem label="HULL" value="100%" status="success" />
            <StatusItem label="REACTOR" value="NOMINAL" status="success" />
            <StatusItem label="COMMS" value="ONLINE" status="success" />
            <StatusItem label="DRIVES" value="READY" status="warning" />
          </div>
        </footer>
      </div>
    </main>
  );
}

function NavCard({
  href,
  title,
  description,
  status,
}: {
  href: string;
  title: string;
  description: string;
  status: string;
}) {
  return (
    <Link
      href={href}
      className="group relative bg-background-secondary border border-border p-6 rounded hover:border-accent-cyan transition-all duration-300 hover:shadow-lg hover:shadow-accent-cyan/20"
    >
      <div className="flex items-start justify-between mb-3">
        <h2 className="text-2xl font-bold text-foreground group-hover:text-accent-cyan transition-colors">
          {title}
        </h2>
        <span className="text-xs font-mono text-accent-amber bg-accent-amber/10 px-2 py-1 rounded">
          {status}
        </span>
      </div>
      <p className="text-foreground-muted text-sm">{description}</p>
      <div className="mt-4 flex items-center gap-2 text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="font-mono text-xs">ACCESS</span>
        <span className="text-lg">→</span>
      </div>
    </Link>
  );
}

function StatusItem({
  label,
  value,
  status,
}: {
  label: string;
  value: string;
  status: "success" | "warning" | "error";
}) {
  const statusColors = {
    success: "text-success",
    warning: "text-warning",
    error: "text-error",
  };

  return (
    <div>
      <div className="text-foreground-muted text-xs mb-1">{label}</div>
      <div className={`font-bold ${statusColors[status]}`}>{value}</div>
    </div>
  );
}
