"use client";

import { useState, useEffect } from "react";
import { audioManager } from "@/lib/audio";

export default function SoundToggle() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Load sound preference from localStorage
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("soundEnabled");
    const enabled = saved === null ? true : saved === "true";
    setSoundEnabled(enabled);
    audioManager.setEnabled(enabled);
  }, []);

  const toggleSound = () => {
    const newState = !soundEnabled;
    setSoundEnabled(newState);
    audioManager.setEnabled(newState);
    localStorage.setItem("soundEnabled", String(newState));

    // Play a sound to confirm if enabling
    if (newState) {
      audioManager.play("click");
    }
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button className="p-1.5 text-foreground-muted opacity-50">
        <SpeakerIcon enabled={true} />
      </button>
    );
  }

  return (
    <button
      onClick={toggleSound}
      className="p-1.5 text-foreground-muted hover:text-accent-cyan transition-colors group"
      title={soundEnabled ? "Disable sound" : "Enable sound"}
      aria-label={soundEnabled ? "Disable sound" : "Enable sound"}
    >
      <SpeakerIcon enabled={soundEnabled} />
    </button>
  );
}

function SpeakerIcon({ enabled }: { enabled: boolean }) {
  if (enabled) {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 3L4 6H2v4h2l4 3V3z" />
        <path d="M11 5.5c.5.5 1 1.5 1 2.5s-.5 2-1 2.5" />
        <path d="M12.5 3.5c1 1 1.5 2.5 1.5 4.5s-.5 3.5-1.5 4.5" />
      </svg>
    );
  }

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3L4 6H2v4h2l4 3V3z" />
      <line x1="11" y1="5" x2="15" y2="11" />
      <line x1="15" y1="5" x2="11" y2="11" />
    </svg>
  );
}
