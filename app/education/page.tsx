export default function EducationPage() {
  return (
    <div className="px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            CERTIFICATIONS
          </h1>
          <p className="text-foreground-muted text-sm">
            Training records and educational background
          </p>
        </header>

        {/* Education List */}
        <div className="grid gap-6">
          {/* Placeholder - Education will be added here */}
          <div className="bg-background-secondary border border-border p-8 rounded text-center">
            <p className="text-foreground-muted font-mono">
              TRAINING RECORDS LOADING...
            </p>
            <p className="text-foreground-muted text-sm mt-2">
              Education data awaiting upload...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
