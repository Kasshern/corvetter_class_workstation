"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import SoundToggle from "./SoundToggle";

interface ShipLayoutProps {
  children: ReactNode;
}

export default function ShipLayout({ children }: ShipLayoutProps) {
  const pathname = usePathname();
  const [currentTime, setCurrentTime] = useState<string>("");

  // Update clock every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime(); // Initial update
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Determine section name from pathname
  const getSectionName = (path: string): string => {
    if (path === "/") return "TERMINAL";

    const sections: Record<string, string> = {
      "/projects": "MISSION LOGS",
      "/skills": "CAPABILITIES",
      "/experience": "SERVICE RECORD",
      "/education": "TRAINING RECORDS",
      "/videos": "VISUAL ARCHIVE",
      "/contact": "COMMUNICATIONS",
    };

    return sections[path] || "TERMINAL";
  };

  const sectionName = getSectionName(pathname);
  const isHome = pathname === "/";

  return (
    <div className="ship-layout min-h-screen flex flex-col">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(to right, #00d4ff 1px, transparent 1px),
            linear-gradient(to bottom, #00d4ff 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />

        {/* Scan Lines */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00d4ff 2px, #00d4ff 4px)',
        }} />

        {/* Vignette */}
        <div className="absolute inset-0" style={{
          boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.5)',
        }} />
      </div>

      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border h-12">
        <div className="h-full px-6 flex items-center justify-between">
          {/* Left: Ship Name */}
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-amber animate-pulse" />
            <span className="text-xs font-mono text-foreground-muted">
              MCRN ROCINANTE
            </span>
          </div>

          {/* Center: Section Name */}
          <div className="text-sm font-bold text-accent-cyan tracking-wider">
            {sectionName}
          </div>

          {/* Right: System Time */}
          <div className="font-mono text-sm text-foreground-muted tabular-nums">
            {currentTime}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 pt-12 pb-10 relative z-10">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="min-h-[calc(100vh-5.5rem)]"
        >
          {children}
        </motion.div>
      </main>

      {/* Bottom Bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border h-10">
        <div className="h-full px-6 flex items-center justify-between">
          {/* Left: Back Navigation */}
          <div className="min-w-[120px]">
            {!isHome && (
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-xs font-mono text-accent-cyan hover:text-accent-amber transition-colors"
              >
                <span>←</span>
                <span>TERMINAL</span>
              </Link>
            )}
          </div>

          {/* Center: System Status */}
          <div className="text-xs font-mono text-foreground-muted">
            SYSTEM STATUS: <span className="text-success">ALL SYSTEMS NOMINAL</span>
          </div>

          {/* Right: Sound Toggle */}
          <div className="min-w-[120px] flex justify-end">
            <SoundToggle />
          </div>
        </div>
      </footer>
    </div>
  );
}
