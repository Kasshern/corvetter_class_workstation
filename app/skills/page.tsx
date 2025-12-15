export default function SkillsPage() {
  return (
    <div className="px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            CAPABILITIES
          </h1>
          <p className="text-foreground-muted text-sm">
            Technical specifications and core competencies
          </p>
        </header>

        {/* Skills Grid */}
        <div className="grid gap-6">
          {/* Placeholder - Skills will be added here */}
          <div className="bg-background-secondary border border-border p-8 rounded text-center">
            <p className="text-foreground-muted font-mono">
              TECHNICAL SPECIFICATIONS LOADING...
            </p>
            <p className="text-foreground-muted text-sm mt-2">
              Capability data awaiting upload...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
