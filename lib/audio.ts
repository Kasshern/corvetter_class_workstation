// Audio utility for playing UI sounds
// Sounds should be placed in /public/sounds/

type SoundType = "click" | "hover" | "success" | "error" | "notification";

class AudioManager {
  private sounds: Map<SoundType, HTMLAudioElement> = new Map();
  private enabled: boolean = true;

  constructor() {
    if (typeof window !== "undefined") {
      this.loadSounds();
    }
  }

  private loadSounds() {
    // Preload sound files when they're available
    const soundFiles: Record<SoundType, string> = {
      click: "/sounds/click.mp3",
      hover: "/sounds/hover.mp3",
      success: "/sounds/success.mp3",
      error: "/sounds/error.mp3",
      notification: "/sounds/notification.mp3",
    };

    Object.entries(soundFiles).forEach(([type, path]) => {
      const audio = new Audio(path);
      audio.volume = 0.3; // Default volume
      this.sounds.set(type as SoundType, audio);
    });
  }

  play(type: SoundType, volume?: number) {
    if (!this.enabled) return;

    const sound = this.sounds.get(type);
    if (sound) {
      sound.currentTime = 0;
      if (volume !== undefined) {
        sound.volume = Math.max(0, Math.min(1, volume));
      }
      sound.play().catch((error) => {
        console.warn(`Failed to play sound: ${type}`, error);
      });
    }
  }

  setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  isEnabled() {
    return this.enabled;
  }
}

export const audioManager = new AudioManager();
