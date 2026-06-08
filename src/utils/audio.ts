// Web Audio API Synthesizer for Retro Zombies Sound Effects
class AudioSynth {
  private ctx: AudioContext | null = null;

  private init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Flashlight toggle switch click
  playClick() {
    try {
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1200, t);
      osc.frequency.exponentialRampToValueAtTime(150, t + 0.05);
      
      gain.gain.setValueAtTime(0.08, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.05);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.06);
    } catch (e) {
      if (window.DEBUG_VERBOSE) {
        console.warn('Audio click play failed', e);
      }
    }
  }

  // Buying a door / Unlocking arcade chime
  playUnlock() {
    try {
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      
      // Multi-note synth chime
      const notes = [261.63, 329.63, 392.00, 523.25]; // C, E, G, C
      notes.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t + idx * 0.08);
        
        gain.gain.setValueAtTime(0.0, t);
        gain.gain.linearRampToValueAtTime(0.08, t + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.01, t + idx * 0.08 + 0.25);
        
        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        osc.start(t + idx * 0.08);
        osc.stop(t + idx * 0.08 + 0.3);
      });
    } catch (e) {
      if (window.DEBUG_VERBOSE) {
        console.warn('Audio unlock play failed', e);
      }
    }
  }

  // Denied / Locked buzzer sound
  playDenied() {
    try {
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc1.type = 'sawtooth';
      osc2.type = 'sawtooth';
      osc1.frequency.setValueAtTime(100, t);
      osc2.frequency.setValueAtTime(98, t);
      
      gain.gain.setValueAtTime(0.12, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.25);
      
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc1.start(t);
      osc2.start(t);
      osc1.stop(t + 0.26);
      osc2.stop(t + 0.26);
    } catch (e) {
      if (window.DEBUG_VERBOSE) {
        console.warn('Audio denied play failed', e);
      }
    }
  }

  // Points addition sound (+10)
  playPoints() {
    try {
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, t);
      osc.frequency.exponentialRampToValueAtTime(1760, t + 0.08);
      
      gain.gain.setValueAtTime(0.04, t);
      gain.gain.exponentialRampToValueAtTime(0.005, t + 0.1);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.11);
    } catch (e) {
      if (window.DEBUG_VERBOSE) {
        console.warn('Audio points play failed', e);
      }
    }
  }

  // Background scary ambient rumble
  playRumble() {
    try {
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      
      const osc = this.ctx.createOscillator();
      const oscMod = this.ctx.createOscillator();
      const gainMod = this.ctx.createGain();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(55, t); // Low A
      
      oscMod.type = 'sine';
      oscMod.frequency.setValueAtTime(2.5, t); // LFO
      
      gainMod.gain.setValueAtTime(15, t);
      
      gain.gain.setValueAtTime(0.05, t);
      
      oscMod.connect(gainMod);
      gainMod.connect(osc.frequency);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      oscMod.start(t);
      osc.start(t);
      
      // Let it play continuously or for a long time
      // We keep it short and clean to restart on user interaction
    } catch (e) {
      // Ignore audio resume restrictions
    }
  }

  // Door purchase sound
  playDoorPurchase() {
    this.playUnlock(); // Reuse unlock chime for door purchase
  }

  // Pistol shot - sharp synthetic gunshot
  playPistolShot() {
    try {
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      
      // Noise burst for gunshot
      const bufferSize = this.ctx.sampleRate * 0.15;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(3000, t);
      filter.frequency.exponentialRampToValueAtTime(100, t + 0.1);
      
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.15, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.15);
      
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      
      noise.start(t);
      
      // Add a low thump
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(150, t);
      osc.frequency.exponentialRampToValueAtTime(50, t + 0.1);
      oscGain.gain.setValueAtTime(0.1, t);
      oscGain.gain.exponentialRampToValueAtTime(0.01, t + 0.1);
      osc.connect(oscGain);
      oscGain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.12);
    } catch (e) {
      if (window.DEBUG_VERBOSE) {
        console.warn('Audio pistol shot play failed', e);
      }
    }
  }

  // Reload sound - mechanical click and slide
  playReload() {
    try {
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      
      // First click (mag out)
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'square';
      osc1.frequency.setValueAtTime(200, t);
      gain1.gain.setValueAtTime(0.08, t);
      gain1.gain.exponentialRampToValueAtTime(0.01, t + 0.05);
      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start(t);
      osc1.stop(t + 0.06);
      
      // Slide sound (mag in / rack)
      setTimeout(() => {
        const osc2 = this.ctx!.createOscillator();
        const gain2 = this.ctx!.createGain();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(400, 0);
        osc2.frequency.linearRampToValueAtTime(600, 0.1);
        gain2.gain.setValueAtTime(0.06, 0);
        gain2.gain.exponentialRampToValueAtTime(0.01, 0.1);
        osc2.connect(gain2);
        gain2.connect(this.ctx!.destination);
        osc2.start();
        osc2.stop(0.12);
      }, 80);
    } catch (e) {
      if (window.DEBUG_VERBOSE) {
        console.warn('Audio reload play failed', e);
      }
    }
  }

  // Zombie hit - meaty impact
  playZombieHit() {
    try {
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      
      // Low thud with noise
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(80, t);
      osc.frequency.exponentialRampToValueAtTime(40, t + 0.1);
      gain.gain.setValueAtTime(0.1, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.1);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.12);
    } catch (e) {
      if (window.DEBUG_VERBOSE) {
        console.warn('Audio zombie hit play failed', e);
      }
    }
  }

  // Zombie death - longer gurgle/thud
  playZombieDeath() {
    try {
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      
      // Deep thud
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(60, t);
      osc.frequency.exponentialRampToValueAtTime(30, t + 0.3);
      gain.gain.setValueAtTime(0.12, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.35);
      
      // Add some noise for gore effect
      const bufferSize = this.ctx.sampleRate * 0.2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'lowpass';
      noiseFilter.frequency.value = 200;
      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.08, t);
      noiseGain.gain.exponentialRampToValueAtTime(0.01, t + 0.2);
      
      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);
      noise.start(t);
    } catch (e) {
      if (window.DEBUG_VERBOSE) {
        console.warn('Audio zombie death play failed', e);
      }
    }
  }

  // Power-up pickup - pleasant ascending chime
  playPowerUpPickup() {
    try {
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      
      // Ascending major arpeggio
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C, E, G, C
      notes.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t + idx * 0.08);
        
        gain.gain.setValueAtTime(0.0, t + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.1, t + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.01, t + idx * 0.08 + 0.2);
        
        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        osc.start(t + idx * 0.08);
        osc.stop(t + idx * 0.08 + 0.25);
      });
    } catch (e) {
      if (window.DEBUG_VERBOSE) {
        console.warn('Audio powerup pickup play failed', e);
      }
    }
  }

  // Round start - dramatic fanfare
  playRoundStart() {
    try {
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      
      // Dramatic low brass hit
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc1.type = 'sawtooth';
      osc2.type = 'sawtooth';
      osc1.frequency.setValueAtTime(100, t);
      osc2.frequency.setValueAtTime(102, t); // Slight detune for thickness
      
      gain.gain.setValueAtTime(0.15, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.5);
      
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc1.start(t);
      osc2.start(t);
      osc1.stop(t + 0.55);
      osc2.stop(t + 0.55);
    } catch (e) {
      if (window.DEBUG_VERBOSE) {
        console.warn('Audio round start play failed', e);
      }
    }
  }

  // Player hurt - painful descending tone
  playPlayerHurt() {
    try {
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      
      // Descending painful tone
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(300, t);
      osc.frequency.exponentialRampToValueAtTime(100, t + 0.2);
      gain.gain.setValueAtTime(0.1, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.3);
    } catch (e) {
      if (window.DEBUG_VERBOSE) {
        console.warn('Audio player hurt play failed', e);
      }
    }
  }

  // Game over - dramatic descending death sound
  playGameOver() {
    try {
      this.init();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;

      // Dramatic descending death tone
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sawtooth';
      osc2.type = 'square';
      osc1.frequency.setValueAtTime(200, t);
      osc2.frequency.setValueAtTime(198, t); // Slight detune
      osc1.frequency.exponentialRampToValueAtTime(50, t + 1.0);
      osc2.frequency.exponentialRampToValueAtTime(48, t + 1.0);

      gain.gain.setValueAtTime(0.15, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 1.2);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(t);
      osc2.start(t);
      osc1.stop(t + 1.3);
      osc2.stop(t + 1.3);
    } catch (e) {
      if (window.DEBUG_VERBOSE) {
        console.warn('Audio game over play failed', e);
      }
    }
  }
}

export const sound = new AudioSynth();

/**
 * Play a sound by name
 */
export function playSound(soundName: string): void {
  switch (soundName) {
    case 'click':
      sound.playClick();
      break;
    case 'unlock':
      sound.playUnlock();
      break;
    case 'door_purchase':
      sound.playDoorPurchase();
      break;
    case 'denied':
      sound.playDenied();
      break;
    case 'points':
      sound.playPoints();
      break;
    case 'rumble':
      sound.playRumble();
      break;
    case 'pistol_shot':
      sound.playPistolShot();
      break;
    case 'reload':
      sound.playReload();
      break;
    case 'zombie_hit':
      sound.playZombieHit();
      break;
    case 'zombie_death':
      sound.playZombieDeath();
      break;
    case 'powerup_pickup':
      sound.playPowerUpPickup();
      break;
    case 'round_start':
      sound.playRoundStart();
      break;
    case 'player_hurt':
      sound.playPlayerHurt();
      break;
    case 'game_over':
      sound.playGameOver();
      break;
    default:
      if (window.DEBUG_VERBOSE) {
        console.warn(`Unknown sound: ${soundName}`);
      }
  }
}

export default sound;
