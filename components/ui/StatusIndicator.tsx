interface StatusIndicatorProps {
  status: "online" | "offline" | "warning" | "error";
  label?: string;
  pulse?: boolean;
}

export default function StatusIndicator({
  status,
  label,
  pulse = false,
}: StatusIndicatorProps) {
  const statusColors = {
    online: "bg-success",
    offline: "bg-foreground-muted",
    warning: "bg-warning",
    error: "bg-error",
  };

  const statusLabels = {
    online: "ONLINE",
    offline: "OFFLINE",
    warning: "WARNING",
    error: "ERROR",
  };

  return (
    <div className="inline-flex items-center gap-2">
      <div
        className={`w-2 h-2 rounded-full ${statusColors[status]} ${
          pulse ? "animate-pulse" : ""
        }`}
      />
      {label && (
        <span className="text-sm font-mono text-foreground-muted">
          {label || statusLabels[status]}
        </span>
      )}
    </div>
  );
}
