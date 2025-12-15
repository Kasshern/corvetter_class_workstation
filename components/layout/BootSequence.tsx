"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypewriterText from "@/components/ui/TypewriterText";

interface BootSequenceProps {
  children: React.ReactNode;
}

const BOOT_STORAGE_KEY = "rocinante_boot_complete";
const BOOT_EXPIRY_HOURS = 24;

export default function BootSequence({ children }: BootSequenceProps) {
  const [bootComplete, setBootComplete] = useState(false);
  const [showBoot, setShowBoot] = useState(false);
  const [stage, setStage] = useState<1 | 2 | 3>(1);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Check if boot sequence should be shown
  useEffect(() => {
    setMounted(true);

    const bootData = localStorage.getItem(BOOT_STORAGE_KEY);
    if (bootData) {
      try {
        const { timestamp } = JSON.parse(bootData);
        const hoursSinceLastBoot = (Date.now() - timestamp) / (1000 * 60 * 60);

        if (hoursSinceLastBoot < BOOT_EXPIRY_HOURS) {
          // Boot sequence already shown recently
          setBootComplete(true);
          setShowBoot(false);
          return;
        }
      } catch (e) {
        // Invalid data, show boot
      }
    }

    // Show boot sequence
    setShowBoot(true);
  }, []);

  // Stage progression
  useEffect(() => {
    if (!showBoot) return;

    if (stage === 1) {
      // Move to stage 2 after 1.2s
      const timer = setTimeout(() => setStage(2), 1200);
      return () => clearTimeout(timer);
    } else if (stage === 2) {
      // Move to stage 3 after 1s
      const timer = setTimeout(() => setStage(3), 1000);
      return () => clearTimeout(timer);
    } else if (stage === 3) {
      // Animate progress bar
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            // Complete boot after progress reaches 100%
            setTimeout(() => completeBoot(), 300);
            return 100;
          }
          return prev + 2; // Increment by 2% every 25ms = 1.25s total
        });
      }, 25);
      return () => clearInterval(interval);
    }
  }, [stage, showBoot]);

  const completeBoot = () => {
    // Store completion timestamp
    localStorage.setItem(
      BOOT_STORAGE_KEY,
      JSON.stringify({ timestamp: Date.now() })
    );
    setBootComplete(true);
  };

  const handleSkip = () => {
    completeBoot();
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  // If boot is complete or shouldn't show, render children
  if (bootComplete || !showBoot) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 bg-background z-[9999] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {/* Stage 1: Initialization */}
        {stage === 1 && (
          <motion.div
            key="stage1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center font-mono"
          >
            <div className="space-y-2">
              <TypewriterText
                text="MCRN CORVETTE-CLASS VESSEL"
                speed={50}
                className="text-accent-amber text-sm tracking-widest"
              />
              <TypewriterText
                text="ROCINANTE"
                speed={50}
                delay={300}
                className="text-accent-amber text-2xl font-bold tracking-wider"
              />
              <TypewriterText
                text="INITIALIZING CREW INTERFACE..."
                speed={50}
                delay={600}
                className="text-accent-amber text-xs tracking-wide mt-4"
              />
            </div>
          </motion.div>
        )}

        {/* Stage 2: Identification */}
        {stage === 2 && (
          <motion.div
            key="stage2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center font-mono"
          >
            <div className="space-y-3">
              <div className="text-accent-amber text-sm tracking-widest mb-6">
                CREW MEMBER IDENTIFIED
              </div>
              <div className="text-foreground text-3xl font-bold tracking-wide">
                KEITH SALZMAN
              </div>
              <div className="text-accent-cyan text-sm tracking-wide">
                BLOCKCHAIN & MACHINE LEARNING ENGINEER
              </div>
            </div>
          </motion.div>
        )}

        {/* Stage 3: Loading */}
        {stage === 3 && (
          <motion.div
            key="stage3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center font-mono w-full max-w-md px-8"
          >
            <div className="space-y-4">
              <div className="text-accent-amber text-sm tracking-widest">
                LOADING INTERFACE...
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-border rounded-sm h-6 overflow-hidden">
                <motion.div
                  className="h-full bg-accent-amber flex items-center justify-end pr-2"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.05 }}
                >
                  <span className="text-background text-xs font-bold">
                    {Math.round(progress)}%
                  </span>
                </motion.div>
              </div>

              {/* Progress Bar Text Representation */}
              <div className="text-accent-amber text-xs tracking-wider">
                [{
                  "█".repeat(Math.floor(progress / 5)) +
                  "░".repeat(20 - Math.floor(progress / 5))
                }]
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="fixed bottom-8 right-8 text-foreground-muted hover:text-accent-cyan text-xs font-mono tracking-wider transition-colors border border-border px-4 py-2 rounded hover:border-accent-cyan"
      >
        SKIP
      </button>
    </div>
  );
}
