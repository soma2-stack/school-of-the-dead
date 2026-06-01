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
      console.warn('Audio click play failed', e);
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
      console.warn('Audio unlock play failed', e);
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
      console.warn('Audio denied play failed', e);
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
      console.warn('Audio points play failed', e);
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
}

export const sound = new AudioSynth();
export default sound;
