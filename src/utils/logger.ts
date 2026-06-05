// Logger utility with levels and debug flag

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

// Set to true to see debug logs, false for production gameplay
const DEBUG_MODE = false;
const CURRENT_LOG_LEVEL = DEBUG_MODE ? LogLevel.DEBUG : LogLevel.INFO;

export class Logger {
  private prefix: string;

  constructor(prefix: string) {
    this.prefix = prefix;
  }

  debug(...args: any[]): void {
    if (CURRENT_LOG_LEVEL <= LogLevel.DEBUG) {
      console.log(`[DEBUG][${this.prefix}]`, ...args);
    }
  }

  info(...args: any[]): void {
    if (CURRENT_LOG_LEVEL <= LogLevel.INFO) {
      console.info(`[INFO][${this.prefix}]`, ...args);
    }
  }

  warn(...args: any[]): void {
    if (CURRENT_LOG_LEVEL <= LogLevel.WARN) {
      console.warn(`[WARN][${this.prefix}]`, ...args);
    }
  }

  error(...args: any[]): void {
    if (CURRENT_LOG_LEVEL <= LogLevel.ERROR) {
      console.error(`[ERROR][${this.prefix}]`, ...args);
    }
  }
}

// Pre-created loggers for different systems
export const logger = {
  rounds: new Logger('ROUNDS'),
  zombies: new Logger('ZOMBIES'),
  points: new Logger('POINTS'),
  weapon: new Logger('WEAPON'),
  ui: new Logger('UI'),
  input: new Logger('INPUT'),
  game: new Logger('GAME'),
};
